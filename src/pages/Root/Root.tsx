import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../modules/common/ui/Header/Header";
import Footer from "../../modules/common/ui/Footer/Footer";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Root;
