import React, { FC, useState } from "react";
import styles from "./Card.module.scss";

import { IPeople } from "@/interfaces/people.interface";
import CardModal from "@/components/Home/CardsList/Card/CardModal/CardModal";

interface IProps {
  card: IPeople;
}

const Card: FC<IProps> = ({ card }) => {
  const [showModal, setShowModal] = useState(false);

  function handleClick(): void {
    setShowModal(true);
  }

  function closeModal(): void {
    setShowModal(false);
  }

  return (
    <>
      <li className={styles.card} onClick={handleClick}>
        <ul>
          <li>
            <span className={styles.bold}>Name:</span>
            {card.name}
          </li>
          <li>
            <span className={styles.bold}>Birth year:</span>
            {card.birth_year}
          </li>
          <li>
            <span className={styles.bold}>Gender:</span>
            {card.gender}
          </li>
        </ul>
      </li>
      <CardModal card={card} isShow={showModal} onClose={() => closeModal()} />
    </>
  );
};

export default Card;
