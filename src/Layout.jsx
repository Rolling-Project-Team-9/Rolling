import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <>
      <div>GNB</div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
