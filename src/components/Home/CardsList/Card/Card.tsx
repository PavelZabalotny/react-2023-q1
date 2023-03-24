import React, { FC } from "react";
import styles from "./Card.module.scss";
import { IFakeData } from "@/interfaces/fakeData.interface";

interface IProps {
  props: IFakeData;
}

const Card: FC<IProps> = ({ props: { title, description, image, price } }) => {
  return (
    <li className={styles.card}>
      <div className={styles.card__img}>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>{price} USD</div>
    </li>
  );
};

export default Card;
