import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import Forms from "@/pages/Forms/Forms";

test("render Forms component", () => {
  render(<Forms />);
  const aboutElement = screen.getByText(/The Card List is empty/i);
  expect(aboutElement).toBeInTheDocument();
});
