import { cloneElement } from 'react';

import { RouterLink } from 'src/routes/components';

// ----------------------------------------------------------------------

// Custom smooth scroll handler for anchor links
const handleAnchorClick = (e, path) => {
  if (path.startsWith('/#')) {
    e.preventDefault();
    const targetId = path.substring(2); // Remove '/#'
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
};

export function createNavItem({
  path,
  icon,
  info,
  depth,
  render,
  hasChild,
  externalLink,
  enabledRootRedirect,
}) {
  const rootItem = depth === 1;
  const subItem = !rootItem;
  const subDeepItem = Number(depth) > 2;

  // Handle anchor links with smooth scrolling
  const isAnchorLink = path.startsWith('/#');
  
  const linkProps = externalLink
    ? { href: path, target: '_blank', rel: 'noopener noreferrer' }
    : isAnchorLink
    ? { 
        href: path,
        onClick: (e) => handleAnchorClick(e, path)
      }
    : { component: RouterLink, href: path };

  const baseProps = hasChild && !enabledRootRedirect ? { component: 'div' } : linkProps;

  /**
   * Render @icon
   */
  let renderIcon = null;

  if (icon && render?.navIcon && typeof icon === 'string') {
    renderIcon = render?.navIcon[icon];
  } else {
    renderIcon = icon;
  }

  /**
   * Render @info
   */
  let renderInfo = null;

  if (info && render?.navInfo && Array.isArray(info)) {
    const [key, value] = info;
    const element = render.navInfo(value)[key];

    renderInfo = element ? cloneElement(element) : null;
  } else {
    renderInfo = info;
  }

  return {
    subItem,
    rootItem,
    subDeepItem,
    baseProps,
    renderIcon,
    renderInfo,
  };
}
