import { Suspense } from 'react';

import { HomePage } from 'src/pages/home';
import { MainLayout } from 'src/layouts/main';

import { SplashScreen } from 'src/components/loading-screen';

import { mainRoutes } from './main';

// ----------------------------------------------------------------------

export const routesSection = [
  {
    path: '/',
    element: (
      <Suspense fallback={<SplashScreen />}>
        <MainLayout>
          <HomePage />
        </MainLayout>
      </Suspense>
    ),
  },

  // Main
  ...mainRoutes,

  // No match - redirect to home
  { path: '*', element: <HomePage /> },
];