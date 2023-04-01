import React, { useState } from "react";
import Form from "@/components/Form/Form";
import FormCardsList from "@/components/Form/FormCardsList/FormCardsList";
import { IFormCard } from "@/interfaces/formCard.interface";

const Forms = () => {
  const [cards, setCards] = useState<IFormCard[]>([]);

  function handleFormSubmit(card: IFormCard) {
    setCards((prevState) => [...prevState, card]);
  }

  return (
    <>
      <Form getCard={(card: IFormCard) => handleFormSubmit(card)} />
      <FormCardsList cards={cards} />
    </>
  );
};

export default Forms;
