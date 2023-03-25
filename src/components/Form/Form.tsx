import React, { Component, FormEvent } from "react";
import styles from "./Form.module.scss";
import FormInput from "@/components/Form/FormInput/FormInput";
import { textValidation } from "@/shared/utils/validators/textValidation";
import { dateValidation } from "@/shared/utils/validators/dateValidation";
import { validateAllFields } from "@/shared/utils/validators/validateAllFields";
import { TInputName } from "@/interfaces/inputName.type";
import FormSelect from "@/components/Form/FormSelect/FormSelect";
import { categories } from "@/data/mockCategories";
import { checkboxValidation } from "@/shared/utils/validators/checkboxValidation";
import FormRadio from "@/components/Form/FormRadio/FormRadio";
import { radioAndSelectValidation } from "@/shared/utils/validators/radioAndSelectValidation";
import { imageValidation } from "@/shared/utils/validators/imageValidation";
import { createImage } from "@/shared/utils/createImage";
import { IFormCard, TCardBorderColor } from "@/pages/Forms/Forms";
import uuid from "react-uuid";

interface IState {
  isFormValid: boolean;
  hasError: { [key in TInputName]?: boolean };
}

interface IProps {
  onSubmit: (cards: IFormCard) => void;
}

class Form extends Component<IProps, IState> {
  private formRef = React.createRef<HTMLFormElement>();
  private textRef = React.createRef<HTMLInputElement>();
  private dateRef = React.createRef<HTMLInputElement>();
  private selectRef = React.createRef<HTMLSelectElement>();
  private checkboxRef = React.createRef<HTMLInputElement>();
  private imageRef = React.createRef<HTMLInputElement>();
  private radioConfig = [
    {
      ref: React.createRef<HTMLInputElement>(),
      label: "Red",
      defaultValue: "red",
    },
    {
      ref: React.createRef<HTMLInputElement>(),
      label: "Black",
      defaultValue: "black",
    },
    {
      ref: React.createRef<HTMLInputElement>(),
      label: "Blue",
      defaultValue: "blue",
    },
  ];

  public state = {
    isFormValid: false,
    hasError: {
      title: false,
      date: false,
      select: false,
      checkbox: false,
      radio: false,
      image: false,
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
          errorMessage="Please choose the date!"
        />
        <FormSelect
          ref={this.selectRef}
          id="dropdown"
          categories={categories}
          label="Category:"
          showError={hasError.select}
          errorMessage="Choose the category!"
        />
        <FormInput
          type="checkbox"
          ref={this.checkboxRef}
          id="checkbox"
          label="Add Card to the Card list"
          showError={hasError.checkbox}
          errorMessage="Please confirm adding Card to the Card List!"
        />
        <FormRadio
          config={this.radioConfig}
          name="radio"
          showError={hasError.radio}
          errorMessage="Select the border color!"
        />
        <FormInput
          type="file"
          ref={this.imageRef}
          id="image"
          label="Add image"
          showError={hasError.image}
          errorMessage="Select the image file!"
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
    const { current: title } = this.textRef;
    const { current: date } = this.dateRef;
    const { current: select } = this.selectRef;
    const { current: checkbox } = this.checkboxRef;
    const { current: image } = this.imageRef;
    const [radio] = this.radioConfig.filter((radio) => radio.ref.current?.checked);

    if (title && date && select && checkbox && image) {
      const isTitleValid = () => this.handleValidate("title", title.value, textValidation);
      const isDateValid = () => this.handleValidate("date", date.value, dateValidation);
      const isSelectValid = () =>
        this.handleValidate("select", select.value, radioAndSelectValidation);
      const isCheckboxValid = () =>
        this.handleValidate("checkbox", checkbox?.checked.toString(), checkboxValidation);
      const isRadioValid = () =>
        this.handleValidate("radio", radio?.ref.current?.value ?? "", radioAndSelectValidation);
      const isImageValid = () =>
        this.handleValidate("image", image.files?.length.toString() as string, imageValidation);

      const arrayOfValidateFn = [
        isTitleValid,
        isDateValid,
        isSelectValid,
        isCheckboxValid,
        isRadioValid,
        isImageValid,
      ];
      const isFormValid = validateAllFields(arrayOfValidateFn);
      if (isFormValid) {
        const userImage = createImage(image);
        const cards: IFormCard = {
          id: uuid(),
          title: title.value,
          date: date.value,
          category: select.value,
          isCardVisible: checkbox?.checked,
          cardBorderColor: radio?.ref.current?.value as TCardBorderColor,
          img: userImage,
        };
        const confirmSaveData = confirm("The data has been saved!");
        if (confirmSaveData) {
          this.props.onSubmit(cards);
        }
        this.formRef.current?.reset();
      }
    }
  }
}

export default Form;
