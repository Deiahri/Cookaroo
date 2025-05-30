import React from "react";
import { Outlet } from "react-router-dom";
import BottomNavigation from "../BottomNaviation/BottomNavigation";
import Alert from "../Alert/Alert";
import RecipeSaver from "../RecipeSaver/RecipeSaver";

const Main: React.FC = () => {
  return (
    <>
      <RecipeSaver/>
      <Alert />
      <Outlet />
      <BottomNavigation />
    </>
  );
};

export default Main;
