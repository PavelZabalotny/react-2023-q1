import React, { FC } from "react";
import FormCard from "@/components/Form/FormCardsList/FormCard/FormCard";
import styles from "./FormCardsList.module.scss";
import { IFormCard } from "@/interfaces/formCard.interface";

interface IProps {
  cards: IFormCard[];
}

const FormCardsList: FC<IProps> = ({ cards }) => (
  <>
    <h2 className={styles.title}>Card List:</h2>
    {!cards.length && <p>The Card List is empty!</p>}
    <ul className={styles.cards}>
      {cards.map((card) => (
        <FormCard key={card.id} card={card} />
      ))}
    </ul>
  </>
);

export default FormCardsList;
