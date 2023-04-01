import React, { FC } from "react";
import styles from "./FormCard.module.scss";
import { IFormCard } from "@/interfaces/formCard.interface";

interface IProps {
  card: IFormCard;
}

const FormCard: FC<IProps> = ({ card: { title, date, img, category, cardBorderColor } }) => {
  let borderColor = "";
  switch (cardBorderColor) {
    case "black":
      borderColor = styles.black;
      break;
    case "blue":
      borderColor = styles.blue;
      break;
    case "red":
      borderColor = styles.red;
      break;
  }
  const cardClasses = `${styles.card} ${borderColor}`;

  return (
    <li className={cardClasses}>
      <div>
        <img src={img.src} alt={img.alt} />
      </div>
      <h3>Title: {title}</h3>
      <div>Date: {date}</div>
      <div>Category: {category}</div>
    </li>
  );
};

export default FormCard;
