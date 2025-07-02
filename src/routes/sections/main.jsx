import { Suspense } from 'react';
import { Outlet } from 'react-router';

import { HomePage } from 'src/pages/home';
import { MainLayout } from 'src/layouts/main';

import { SplashScreen } from 'src/components/loading-screen';

// ----------------------------------------------------------------------

export const mainRoutes = [
  {
    element: (
      <Suspense fallback={<SplashScreen />}>
        <Outlet />
      </Suspense>
    ),
    children: [
      {
        element: (
          <MainLayout>
            <Outlet />
          </MainLayout>
        ),
        children: [
          { index: true, element: <HomePage /> },
        ],
      },
    ],
  },
];