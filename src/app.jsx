import 'src/global.css';

import { ThemeProvider } from 'src/theme/theme-provider';
import { LocalizationProvider } from 'src/locales/localization-provider';

import { Snackbar } from 'src/components/snackbar';
import { ProgressBar } from 'src/components/progress-bar';
import { MotionLazy } from 'src/components/animate/motion-lazy';
import { defaultSettings, SettingsProvider } from 'src/components/settings';

import { AuthProvider } from 'src/auth/context/auth-provider';

import { Router } from './router';

// ----------------------------------------------------------------------

export function App() {
  return (
    <AuthProvider>
      <SettingsProvider defaultSettings={defaultSettings}>
        <LocalizationProvider>
          <ThemeProvider>
            <MotionLazy>
              <ProgressBar />
              <Snackbar />
              <Router />
            </MotionLazy>
          </ThemeProvider>
        </LocalizationProvider>
      </SettingsProvider>
    </AuthProvider>
  );
}