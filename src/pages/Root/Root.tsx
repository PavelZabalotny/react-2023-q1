import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../modules/common/ui/Header/Header";
import Footer from "../../modules/common/ui/Footer/Footer";
import styles from "./Root.module.scss";
import { CardsContext, defaultState } from "../../shared/context/cardsContext";

function Root() {
  return (
    <CardsContext.Provider value={defaultState}>
      <Header />
      <main className={styles.main}>
        <div className={styles.wrapper}>
          <Outlet />
        </div>
      </main>
      <Footer />
    </CardsContext.Provider>
  );
}

export default Root;
