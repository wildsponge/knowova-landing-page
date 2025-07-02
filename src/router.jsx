import { Route, Routes, Navigate } from 'react-router';

import { HomePage } from 'src/pages/home';
import { MainLayout } from 'src/layouts/main';

// ----------------------------------------------------------------------

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
      {/* Redirect all other routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}