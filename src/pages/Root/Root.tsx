import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../modules/common/ui/Header/Header";
import Footer from "../../modules/common/ui/Footer/Footer";
import styles from "./Root.module.scss";

function Root() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Root;
