import React from "react";
import SearchBar from "@/components/Home/SearchBar/SearchBar";
import CardsList from "@/components/Home/CardsList/CardsList";
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
