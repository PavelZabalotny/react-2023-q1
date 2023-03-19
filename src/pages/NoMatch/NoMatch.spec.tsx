import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import NoMatch from "./NoMatch";
import React from "react";

test("render NoMatch component", () => {
  render(<NoMatch />);
  const component = screen.getByRole("heading", {
    level: 2,
  });
  expect(component).toBeInTheDocument();
});
