import { render, screen } from "@testing-library/react";
import Home from "@/components/Home/Home";
import React from "react";
import { expect } from "vitest";
import { Provider } from "react-redux";
import { store } from "@/store/store";

test("render Home component", () => {
  render(
    <Provider store={store}>
      <Home />
    </Provider>
  );
  const element = screen.getByAltText(/loading/i);
  expect(element).toBeInTheDocument();
});
