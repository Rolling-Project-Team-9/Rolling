import React from 'react';
import { Outlet } from 'react-router-dom';
import GNB from './GNB';

function App() {
  return (
    <>
      <GNB />
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default App;
