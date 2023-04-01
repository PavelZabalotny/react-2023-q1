import React, { FC } from "react";
import Card from "./Card/Card";
import styles from "./CardsList.module.scss";

import { IPeople } from "@/interfaces/people.interface";

interface IProps {
  cards: IPeople[];
}

const CardsList: FC<IProps> = ({ cards }) => (
  <ul className={styles.cards_list}>
    {cards.map((card) => (
      <Card key={card.name} card={card} />
    ))}
  </ul>
);

export default CardsList;
