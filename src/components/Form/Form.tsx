import React, { FC } from "react";
import styles from "./Form.module.scss";
import { categories } from "@/data/mockCategories";
import { useForm } from "react-hook-form";
import { createImage } from "@/shared/utils/createImage";
import uuid from "react-uuid";
import FormError from "@/components/Form/FormError/FormError";
import { RadioConfigInterface } from "@/interfaces/radioConfig.interface";
import { TCardBorderColor } from "@/interfaces/cardBorderColor.type";
import { IFormCard } from "@/interfaces/formCard.interface";

const radioConfig: RadioConfigInterface[] = [
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

export interface IForm {
  title: string;
  date: string;
  category: string;
  isCardVisible: boolean;
  cardBorderColor: string;
  img: string;
}

const registerOptions = {
  title: {
    required: "Title is required!",
    minLength: {
      value: 5,
      message: "Title must contain at least five letter!",
    },
  },
  date: {
    required: "Date is required!",
  },
  category: {
    required: "Category is required!",
  },
  isCardVisible: {
    required: "Please, check the checkbox!",
  },
  cardBorderColor: {
    required: "Please, choose the border color!",
  },
  img: {
    required: "Image is required!",
  },
};

interface IProps {
  getCard: (card: IFormCard) => void;
}

const Form: FC<IProps> = ({ getCard }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IForm>({ mode: "onSubmit" });

  function formSubmit(data: IForm) {
    if (isValid) {
      const userImage = createImage(data.img);
      const card: IFormCard = {
        id: uuid(),
        title: data.title,
        date: data.date,
        category: data.category,
        isCardVisible: data.isCardVisible,
        cardBorderColor: data.cardBorderColor as TCardBorderColor,
        img: userImage,
      };
      const confirmSaveData = confirm("The data has been saved!");
      if (confirmSaveData) {
        getCard(card);
      }
      reset();
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    handleSubmit(formSubmit)();
  }

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <label>
        Title: <input type="text" {...register("title", registerOptions.title)} />
        {errors.title && <FormError message={errors.title.message} />}
      </label>

      <label>
        Date: <input type="date" {...register("date", registerOptions.date)} />
        {errors.date && <FormError message={errors.date.message} />}
      </label>

      <label>
        Category:
        <select id="dropdown" {...register("category", registerOptions.category)}>
          <option hidden></option>
          {categories.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
        {errors.category && <FormError message={errors.category.message} />}
      </label>

      <label>
        Add Card to the Card list:{" "}
        <input type="checkbox" {...register("isCardVisible", registerOptions.isCardVisible)} />
        {errors.isCardVisible && <FormError message={errors.isCardVisible.message} />}
      </label>

      <fieldset>
        <legend>Choose the border color around the card</legend>
        <div className={styles.radioGroup}>
          {radioConfig.map((el) => (
            <label key={el.defaultValue}>
              <input
                type="radio"
                defaultValue={el.defaultValue}
                {...register("cardBorderColor", registerOptions.cardBorderColor)}
              />{" "}
              {el.label}
            </label>
          ))}
        </div>
        {errors.cardBorderColor && <FormError message={errors.cardBorderColor.message} />}
      </fieldset>

      <label>
        Image: <input type="file" {...register("img", registerOptions.img)} accept="image/*" />
        {errors.img && <FormError message={errors.img.message} />}
      </label>

      <button>Submit</button>
    </form>
  );
};

export default Form;
