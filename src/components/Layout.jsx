import React from 'react';
import { Outlet } from 'react-router-dom';
import GlobalStyles from '../styles/globalStyle';

function Layout() {
  return (
    <>
      <GlobalStyles />
      <div>GNB</div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
