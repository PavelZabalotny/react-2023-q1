import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import About from "./About";

test("render About component", () => {
  render(<About />);
  const aboutElement = screen.getByRole("heading", { level: 2 });
  expect(aboutElement).toBeInTheDocument();
});
