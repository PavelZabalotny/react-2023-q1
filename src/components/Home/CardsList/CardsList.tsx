import React, { Component } from "react";
import Card from "./Card/Card";
import styles from "./CardsList.module.scss";
import { fakeData } from "@/data/fakeData";

class CardsList extends Component {
  render() {
    return (
      <ul className={styles.cards_list}>
        {fakeData.map((card) => (
          <Card key={card.id} props={card} />
        ))}
      </ul>
    );
  }
}

export default CardsList;
