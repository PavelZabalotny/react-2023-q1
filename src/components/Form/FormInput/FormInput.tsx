import React, { forwardRef } from "react";
import styles from "./FormInput.module.scss";
import FormError from "@/components/Form/FormError/FormError";
import { TInputName } from "@/interfaces/inputName.type";

interface IProps {
  type: "text" | "date";
  ref: React.RefObject<HTMLInputElement>;
  id: TInputName;
  label: string;
  showError: boolean | null;
  errorMessage: string;
}

const FormInput: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IProps> & React.RefAttributes<HTMLInputElement>
> = forwardRef(({ type, id, label, showError, errorMessage }, ref) => (
  <div className={styles.container}>
    <label>
      {label} <input type={type} id={id} ref={ref} />
    </label>
    {showError && <FormError message={errorMessage} />}
  </div>
));

export default FormInput;
