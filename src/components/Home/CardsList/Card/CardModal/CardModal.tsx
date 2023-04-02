import React, { FC } from "react";
import { IPeople } from "@/interfaces/people.interface";
import styles from "./CardModal.module.scss";
import { createPortal } from "react-dom";

interface IProps {
  card: IPeople;
  isShow: boolean;
  onClose: () => void;
}

const CardModal: FC<IProps> = ({
  card: { name, birth_year, gender, mass, height, eye_color, skin_color, hair_color },
  isShow,
  onClose,
}) => {
  console.log("render modal");
  if (!isShow) return null;

  const modalContainer = (
    <div className={styles.modal}>
      <div className={styles.modal_wrapper} onClick={onClose}></div>
      <div className={styles.modal_card}>
        <span className={styles.modal_close} onClick={onClose}>
          X
        </span>
        <ul className={styles.modal_list}>
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
          <li>
            <span className={styles.bold}>Mass:</span>
            {mass}
          </li>
          <li>
            <span className={styles.bold}>Height:</span>
            {height}
          </li>
          <li>
            <span className={styles.bold}>Eye color:</span>
            {eye_color}
          </li>
          <li>
            <span className={styles.bold}>Skin color:</span>
            {skin_color}
          </li>
          <li>
            <span className={styles.bold}>Hair color:</span>
            {hair_color}
          </li>
        </ul>
      </div>
    </div>
  );
  const rootContainer = document.getElementById("root") as HTMLDivElement;

  return createPortal(modalContainer, rootContainer);
};

export default CardModal;
