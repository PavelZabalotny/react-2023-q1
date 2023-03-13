import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import CardsList from "./CardsList";
import React from "react";

test("render CardList component", () => {
  render(<CardsList />);
  const element = screen.getByTestId("CardList");
  expect(element).toBeDefined();
});
