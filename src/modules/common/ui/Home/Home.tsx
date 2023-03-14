import React from "react";
import SearchBar from "@/modules/common/components/SearchBar/SearchBar";
import CardsList from "@/modules/common/components/CardsList/CardsList";
import styles from "./Home.module.scss";

function Home() {
  return (
    <div className={styles.home}>
      <SearchBar />
      <CardsList />
    </div>
  );
}

export default Home;
