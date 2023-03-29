import React from "react";
import Card from "./Card/Card";
import styles from "./CardsList.module.scss";
import { fakeData } from "@/data/fakeData";

const CardsList = () => (
  <ul className={styles.cards_list}>
    {fakeData.map((card) => (
      <Card key={card.id} props={card} />
    ))}
  </ul>
);

export default CardsList;
