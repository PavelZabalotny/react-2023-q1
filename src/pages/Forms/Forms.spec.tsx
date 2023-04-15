import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Forms from "@/pages/Forms/Forms";
import { Provider } from "react-redux";
import { store } from "@/store/store";

test("render Forms component", () => {
  render(
    <Provider store={store}>
      <Forms />
    </Provider>
  );
  const aboutElement = screen.getByText(/The Card List is empty/i);
  expect(aboutElement).toBeInTheDocument();
});
