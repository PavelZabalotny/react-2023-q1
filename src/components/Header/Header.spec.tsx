import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/components/Header/Header";
import React from "react";
import { BrowserRouter } from "react-router-dom";

test("render Header component", () => {
  render(<Header />, { wrapper: BrowserRouter });
  const element = screen.getByRole("banner");
  expect(element).toBeInTheDocument();
});
