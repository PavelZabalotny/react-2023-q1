import React, { FC } from "react";
import Card from "./Card/Card";
import styles from "./CardsList.module.scss";

import { IPeople } from "@/interfaces/people.interface";

interface IProps {
  cards: IPeople[];
}

const CardsList: FC<IProps> = ({ cards }) => {
  const emptyElement = <h3 className={styles.empty}>No result of searching!</h3>;
  return (
    <>
      <h3 className={styles.title}>Characters within the Star Wars universe</h3>
      <ul className={styles.cards_list}>
        {!cards.length ? emptyElement : cards.map((card) => <Card key={card.name} card={card} />)}
      </ul>
    </>
  );
};

export default CardsList;
