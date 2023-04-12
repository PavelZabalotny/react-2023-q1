import { render, screen } from "@testing-library/react";
import Home from "@/components/Home/Home";
import React from "react";
import { expect } from "vitest";
import { Middleware } from "@reduxjs/toolkit";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";

const middlewares: Middleware[] = [];
const mockStore = configureStore(middlewares);

test("render Home component", () => {
  const initialState = {
    searchText: {
      isLoading: false,
    },
  };
  const store = mockStore(initialState);
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const element = screen.getByRole("textbox");
  expect(element).toHaveAttribute("id", "searchBar");
});
