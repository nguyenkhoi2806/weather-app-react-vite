import { Outlet } from 'react-router-dom';

import styleLayout from './layout-main.module.scss';

const Layout = () => {
  return (
    <div className={styleLayout['layout-main']}>
      <Outlet />
    </div>
  );
};
export default Layout;
