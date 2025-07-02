import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

// Simplified navigation for landing page - only essential items
export const navData = [
  { 
    title: 'Home', 
    path: '/', 
    icon: <Iconify width={22} icon="solar:home-angle-bold-duotone" /> 
  },
  { 
    title: 'Features', 
    path: '/#features',
    icon: <Iconify width={22} icon="solar:star-bold-duotone" />
  },
  { 
    title: 'Pricing', 
    path: '/#pricing',
    icon: <Iconify width={22} icon="solar:tag-price-bold-duotone" />
  },
  { 
    title: 'FAQ', 
    path: '/#faq',
    icon: <Iconify width={22} icon="solar:question-circle-bold-duotone" />
  },
];
