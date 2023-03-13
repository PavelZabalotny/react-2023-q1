import React, { FC } from "react";
import { IFakeData } from "../../../../types/fakeData.interface";
import styles from "./Card.module.scss";

interface IProps {
  props: IFakeData;
}

const Card: FC<IProps> = ({ props: { title, description, image, price } }) => {
  return (
    <li className={styles.card} data-testid="card">
      <div>
        <img src={image} alt={title} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div>{price} USD</div>
    </li>
  );
};

export default Card;
