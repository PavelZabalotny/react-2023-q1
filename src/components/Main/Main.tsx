import React from "react";
import styles from "./Main.module.scss";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <Outlet />
      </div>
    </main>
  );
}

export default Main;
