import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Root from "./Root";
import React from "react";
import { BrowserRouter } from "react-router-dom";

test("render Root component", () => {
  render(<Root />, { wrapper: BrowserRouter });
  const element = screen.getByRole("main");
  expect(element).toBeInTheDocument();
});
