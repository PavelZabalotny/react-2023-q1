import React, { FC } from "react";
import FormError from "@/components/Form/FormError/FormError";
import styles from "./FormRadio.module.scss";

export interface IRadioConfig {
  ref: React.RefObject<HTMLInputElement>;
  label: string;
  defaultValue: string;
}

interface IProps {
  name: string;
  config: IRadioConfig[];
  showError: boolean;
  errorMessage: string;
}

const FormRadio: FC<IProps> = ({ name, config, showError, errorMessage }) => (
  <fieldset>
    <legend>Choose the border color around the card</legend>
    <div className={styles.radioGroup}>
      {config.map((el) => (
        <label key={el.defaultValue}>
          <input type="radio" name={name} defaultValue={el.defaultValue} ref={el.ref} /> {el.label}
        </label>
      ))}
    </div>

    {showError && <FormError message={errorMessage} />}
  </fieldset>
);

export default FormRadio;
