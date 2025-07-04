import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as ThemeVarsProvider } from '@mui/material/styles';

import { useTranslate } from 'src/locales';

import { useSettingsContext } from 'src/components/settings';

import { createTheme } from './create-theme';
import { Rtl } from './with-settings/right-to-left';

// ----------------------------------------------------------------------

export function ThemeProvider({ themeOverrides, children, ...other }) {
  const settings = useSettingsContext();
  const { currentLang } = useTranslate();

  // Safety check for settings state
  const settingsState = settings?.state || {};
  const direction = settingsState.direction || 'ltr';

  const theme = createTheme({
    settingsState,
    localeComponents: currentLang?.systemValue,
    themeOverrides,
  });

  return (
    <ThemeVarsProvider disableTransitionOnChange theme={theme} {...other}>
      <CssBaseline />
      <Rtl direction={direction}>{children}</Rtl>
    </ThemeVarsProvider>
  );
}
