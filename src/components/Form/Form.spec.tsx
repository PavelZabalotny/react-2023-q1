import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Form from "@/components/Form/Form";
import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store/store";

test("render Form component", () => {
  render(
    <Provider store={store}>
      <Form />
    </Provider>
  );
  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
});
