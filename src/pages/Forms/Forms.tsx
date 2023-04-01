import React, { Component } from "react";
import Form from "@/components/Form/Form";
import FormCardsList from "@/components/Form/FormCardsList/FormCardsList";

export type TCardBorderColor = "red" | "black" | "blue";

export interface IFormCard {
  id: string;
  title: string;
  date: string;
  category: string;
  isCardVisible: boolean;
  cardBorderColor: TCardBorderColor;
  img: HTMLImageElement;
}

export interface IState {
  cards: IFormCard[];
}

class Forms extends Component<Record<string, never>, IState> {
  public state = {
    cards: [],
  };

  render() {
    return (
      <>
        <Form getCard={(card: IFormCard) => this.handleFormSubmit(card)} />
        <FormCardsList cards={this.state.cards} />
      </>
    );
  }

  private handleFormSubmit(card: IFormCard) {
    this.setState((prevState) => ({ cards: [...prevState.cards, card] }));
  }
}

export default Forms;
