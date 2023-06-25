import { lazy } from 'react';

import withSuspense from '@/hoc/withSuspense';
import MainLayout from '@/layouts/Main';

const Home = withSuspense(lazy(() => import('@/pages/Home')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Home />,
    },
  ],
};

export default MainRoutes;
