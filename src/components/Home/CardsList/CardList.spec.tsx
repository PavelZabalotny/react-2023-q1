import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import CardsList from "./CardsList";
import React from "react";

import { IPeople } from "@/interfaces/people.interface";
import configureStore from "redux-mock-store";
import { Middleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const mockCard: IPeople[] = [
  {
    name: "Pavel555",
    birth_year: "1999",
    gender: "male",
    eye_color: "red",
    hair_color: "black",
    height: "188",
    mass: "75",
    skin_color: "brown",
  },
];

const middlewares: Middleware[] = [];
const mockStore = configureStore(middlewares);

test("render CardList component", () => {
  const initialState = {
    searchText: {
      isLoading: false,
    },
  };
  const store = mockStore(initialState);

  render(
    <Provider store={store}>
      <CardsList cards={mockCard} />
    </Provider>
  );
  const element = screen.getByText("Pavel555");
  expect(element).toBeInTheDocument();
});
