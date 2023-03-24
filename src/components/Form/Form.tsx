import React, { Component, FormEvent, PropsWithChildren } from "react";
import styles from "./Form.module.scss";
import FormInput from "@/components/Form/FormInput/FormInput";
import { textValidation } from "@/shared/utils/validators/textValidation";
import { dateValidation } from "@/shared/utils/validators/dateValidation";
import { validateAllFields } from "@/shared/utils/validators/validateAllFields";
import { TInputName } from "@/interfaces/inputName.type";
import FormSelect from "@/components/Form/FormSelect/FormSelect";
import { categories } from "@/data/mockCategories";
import { selectValidation } from "@/shared/utils/validators/selectValidation";

interface IState {
  isFormValid: boolean;
  hasError: { [key in TInputName]?: boolean };
}

class Form extends Component<PropsWithChildren, IState> {
  private formRef = React.createRef<HTMLFormElement>();
  private textRef = React.createRef<HTMLInputElement>();
  private dateRef = React.createRef<HTMLInputElement>();
  private selectRef = React.createRef<HTMLSelectElement>();

  state = {
    isFormValid: false,
    hasError: {
      title: false,
      date: false,
      select: false,
    },
  };

  render() {
    const { hasError } = this.state;

    return (
      <form className={styles.form} onSubmit={(e) => this.handleFormSubmit(e)} ref={this.formRef}>
        <FormInput
          type="text"
          ref={this.textRef}
          id="title"
          label="Title:"
          showError={hasError.title}
          errorMessage="The title must contain at least one letter, and the first letter must be uppercase!"
        />
        <FormInput
          type="date"
          ref={this.dateRef}
          id="date"
          label="Date:"
          showError={hasError.date}
          errorMessage="Please choose a valid date!"
        />
        <FormSelect
          ref={this.selectRef}
          id="dropdown"
          categories={categories}
          label="Category:"
          showError={hasError.select}
          errorMessage="Choose the category!"
        />

        <button type="submit">Submit</button>
      </form>
    );
  }

  private handleValidate(
    name: TInputName,
    value: string,
    validateFn: (value: string) => boolean
  ): boolean {
    const isValid = validateFn(value);
    this.setState((prevState) => ({ hasError: { ...prevState.hasError, [name]: !isValid } }));

    return isValid;
  }

  private handleFormSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { current: textInput } = this.textRef;
    const { current: dateInput } = this.dateRef;
    const { current: select } = this.selectRef;

    if (textInput && dateInput && select) {
      const isTitleValid = () => this.handleValidate("title", textInput.value, textValidation);
      const isDateValid = () => this.handleValidate("date", dateInput.value, dateValidation);
      const isSelectValid = () => this.handleValidate("select", select.value, selectValidation);
      const arrayOfValidateFn = [isTitleValid, isDateValid, isSelectValid];
      const isFormValid = validateAllFields(arrayOfValidateFn);
      if (isFormValid) {
        console.log("form is valid");
        console.log({
          title: textInput.value,
          date: dateInput.value,
          select: select.value,
        });
        this.formRef.current?.reset();
      }
    }
  }
}

export default Form;
