import React, { Component } from "react";
import Form from "@/components/Form/Form";

export type TCardBorderColor = "red" | "black" | "blue";

export interface IFormCards {
  title: string;
  date: string;
  category: string;
  isCardVisible: boolean;
  cardBorderColor: TCardBorderColor;
  img: HTMLImageElement;
}

export interface IState {
  cards: IFormCards[];
}

class Forms extends Component<Record<string, never>, IState> {
  public state = {
    cards: [],
  };

  render() {
    return (
      <>
        <Form onSubmit={(cards: IFormCards) => this.handleFormSubmit(cards)} />
        <h3>Form Card List</h3>
      </>
    );
  }

  private handleFormSubmit(card: IFormCards) {
    console.log("card:", card);
    this.setState((prevState) => ({ cards: [...prevState.cards, card] }));
  }
}

export default Forms;
