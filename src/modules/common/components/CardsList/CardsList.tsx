import React, { Component } from "react";
import { IFakeData } from "../../../../types/fakeData.interface";
import Card from "../Card/Card";
import styles from "./CardsList.module.scss";
import { fakeData } from "../../../../models/fakeData";

class CardsList extends Component<unknown, { cards: IFakeData[] }> {
  state = {
    cards: fakeData,
  };

  render() {
    const { cards } = this.state;
    return (
      <ul className={styles.cards_list}>
        {cards.map((card) => (
          <Card key={card.id} props={card} />
        ))}
      </ul>
    );
  }
}

export default CardsList;
