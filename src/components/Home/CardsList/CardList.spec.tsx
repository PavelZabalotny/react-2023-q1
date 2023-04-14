import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import CardsList from "./CardsList";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

test("render CardList component", async () => {
  render(
    <Provider store={store}>
      <CardsList />
    </Provider>
  );
  const element = screen.getByAltText(/loading/i);
  expect(element).toBeInTheDocument();
});
