import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="root-layout">
      <div className="wrapper">
        <h2>RootLayout</h2>
      </div>
      <Outlet />
    </div>
  );
}

export default RootLayout;
