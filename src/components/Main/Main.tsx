import React from 'react';
import { Outlet } from 'react-router-dom';
import BottomNavigation from '../BottomNaviation/BottomNavigation';

const Main: React.FC = () => {
  return (
    <>
      <Outlet />
      <BottomNavigation/>
    </>
  );
};

export default Main;