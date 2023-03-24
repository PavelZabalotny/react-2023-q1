import React, { Component, FormEvent, PropsWithChildren } from "react";
import styles from "./Form.module.scss";
import FormInput from "@/components/Form/FormInput/FormInput";

type TArrayOfCallbacks = (() => boolean)[];

type TInputName = "title" | "date";

interface IState {
  isFormValid: boolean;
  hasError: { [key in TInputName]?: boolean };
}

function titleValidation(value: string): boolean {
  const clearTitle = value.trim();
  return clearTitle.length > 0 && clearTitle[0] === clearTitle[0].toUpperCase();
}

function dateValidation(value: string): boolean {
  return !isNaN(new Date(value).getTime());
}

function validateAllFields(arrayOfValidateFn: TArrayOfCallbacks): boolean {
  let isAllValid = true;
  arrayOfValidateFn.forEach((fn) => {
    const isValid = fn();
    if (!isValid) {
      isAllValid = isValid;
    }
  });

  return isAllValid;
}

class Form extends Component<PropsWithChildren, IState> {
  private formRef = React.createRef<HTMLFormElement>();
  private textRef = React.createRef<HTMLInputElement>();
  private dateRef = React.createRef<HTMLInputElement>();

  state = {
    isFormValid: false,
    hasError: {
      title: false,
      date: false,
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
          errorMessage="my error text my error text my error text my error text"
        />
        <FormInput
          type="date"
          ref={this.dateRef}
          id="date"
          label="Date:"
          showError={hasError.date}
          errorMessage="my error text my error text my error text my error text"
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

    if (textInput && dateInput) {
      const isTitleValid = () => this.handleValidate("title", textInput.value, titleValidation);
      const isDateValid = () => this.handleValidate("date", dateInput.value, dateValidation);
      const arrayOfValidateFn = [isTitleValid, isDateValid];
      const isFormValid = validateAllFields(arrayOfValidateFn);
      if (isFormValid) {
        console.log("form is valid");
        console.log({
          title: textInput.value,
          date: dateInput.value,
        });
        this.formRef.current?.reset();
      }
    }
  }
}

export default Form;
