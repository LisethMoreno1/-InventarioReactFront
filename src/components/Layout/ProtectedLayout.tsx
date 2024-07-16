import React from "react";
import { Outlet } from "react-router-dom";
import SideBar from "../../pages/Layout/SideBar";

export const ProtectedLayout: React.FC = () => {
  return (
    <div>
      <SideBar />
      <Outlet />
    </div>
  );
};