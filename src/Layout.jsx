import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles from './styles/globalStyle';

function Layout() {
  return (
    <>
      <GlobalStyles />
      <div>GNB</div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
