import { createTheme as createMuiTheme } from '@mui/material/styles';

import { mixins } from './core/mixins';
import { opacity } from './core/opacity';
import { shadows } from './core/shadows';
import { palette } from './core/palette';
import { themeConfig } from './theme-config';
import { components } from './core/components';
import { typography } from './core/typography';
import { customShadows } from './core/custom-shadows';
import { applySettingsToTheme, applySettingsToComponents } from './with-settings';

// ----------------------------------------------------------------------

export const baseTheme = {
  colorSchemes: {
    light: {
      palette: palette.light,
      shadows: shadows.light,
      customShadows: customShadows.light,
      opacity,
    },
    dark: {
      palette: palette.dark,
      shadows: shadows.dark,
      customShadows: customShadows.dark,
      opacity,
    },
  },
  mixins,
  components,
  typography,
  shape: { borderRadius: 8 },
  direction: themeConfig.direction,
  cssVariables: themeConfig.cssVariables,
};

// ----------------------------------------------------------------------

export function createTheme({ settingsState, themeOverrides = {}, localeComponents = {} } = {}) {
  // Update core theme settings (colorSchemes, typography, etc.)
  const updatedCore = settingsState ? applySettingsToTheme(baseTheme, settingsState) : baseTheme;

  // Update component settings (only components)
  const updatedComponents = settingsState ? applySettingsToComponents(settingsState) : {};

  // Create and return the final theme
  const theme = createMuiTheme(updatedCore, updatedComponents, localeComponents, themeOverrides);

  return theme;
}
