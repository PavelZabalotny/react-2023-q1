import React, { FC } from "react";
import styles from "./FormError.module.scss";

interface IProps {
  message: string;
}

const FormError: FC<IProps> = ({ message }) => <div className={styles.error}>{message}</div>;

export default FormError;
