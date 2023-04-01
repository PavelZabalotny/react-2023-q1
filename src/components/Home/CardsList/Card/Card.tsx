import React, { FC } from "react";
import styles from "./Card.module.scss";

import { IPeople } from "@/interfaces/people.interface";

interface IProps {
  card: IPeople;
}

const Card: FC<IProps> = ({ card: { name, birth_year, gender } }) => {
  return (
    <li className={styles.card}>
      <ul>
        <li>
          <span className={styles.bold}>Name:</span>
          {name}
        </li>
        <li>
          <span className={styles.bold}>Birth year:</span>
          {birth_year}
        </li>
        <li>
          <span className={styles.bold}>Gender:</span>
          {gender}
        </li>
      </ul>
    </li>
  );
};

export default Card;
