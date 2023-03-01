import React from "react";
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <div className="rootLayout">
      <div className="wrapper">
        <h2>RootLayout</h2>
        <Outlet />
      </div>
    </div>
  );
}

export default RootLayout;
