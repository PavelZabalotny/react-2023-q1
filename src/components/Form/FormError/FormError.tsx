import React, { FC } from "react";
import styles from "./FormError.module.scss";

interface IProps {
  message?: string | undefined;
}

const FormError: FC<IProps> = ({ message }) => (
  <div className={styles.error}>{message || "Some Error!"}</div>
);

export default FormError;
