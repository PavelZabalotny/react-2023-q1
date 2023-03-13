import { render, screen } from "@testing-library/react";
import Loading from "./Loading";
import { expect } from "vitest";
import React from "react";

test("render Loading component", () => {
  render(<Loading />);
  const element = screen.getByText(/loading/i);
  expect(element).toBeInTheDocument();
});
