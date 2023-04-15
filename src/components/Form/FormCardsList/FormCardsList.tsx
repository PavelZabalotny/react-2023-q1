import React from "react";
import FormCard from "@/components/Form/FormCardsList/FormCard/FormCard";
import styles from "./FormCardsList.module.scss";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const FormCardsList = () => {
  const { cards } = useSelector((state: RootState) => state.form);
  return (
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
};
export default FormCardsList;
