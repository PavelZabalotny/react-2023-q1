import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./Footer";
import React from "react";

test("render Footer component", () => {
  render(<Footer />);
  const element = screen.getByRole("contentinfo");
  expect(element).toBeInTheDocument();
});
