import { useRoutes } from 'react-router-dom';

import NotFound from '@/pages/NotFound';

import MainRoutes from './MainRoutes';

const AppRoute = () => {
  return useRoutes([MainRoutes, { path: '*', element: <NotFound /> }]);
};

export default AppRoute;
