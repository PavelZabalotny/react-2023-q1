import { render, screen } from "@testing-library/react";
import Home from "@/components/Home/Home";
import React from "react";
import { expect } from "vitest";

test("render Home component", () => {
  render(<Home />);
  const element = screen.getByRole("textbox");
  expect(element).toHaveAttribute("id", "search_bar");
});
