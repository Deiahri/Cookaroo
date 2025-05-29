import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../BottomNaviation/BottomNavigation";
import Alert from "../Alert/Alert";

const Main: React.FC = () => {
  return (
    <>
      <Alert />
      <Outlet />
      <BottomNavigation />
    </>
  );
};

export default Main;
