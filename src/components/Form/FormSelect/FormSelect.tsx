import React, { forwardRef } from "react";
import FormError from "@/components/Form/FormError/FormError";

interface IProps {
  id: string;
  categories: string[];
  label: string;
  showError: boolean;
  errorMessage: string;
}

const FormSelect: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<IProps> & React.RefAttributes<HTMLSelectElement>
> = forwardRef(({ id, categories, label, showError, errorMessage }, ref) => (
  <label>
    {label}
    <select id={id} ref={ref}>
      <option defaultValue="" hidden>
        -- Please choose a category --
      </option>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </select>
    {showError && <FormError message={errorMessage} />}
  </label>
));

export default FormSelect;
