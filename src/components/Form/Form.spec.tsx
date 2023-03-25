import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Form from "@/components/Form/Form";
import React from "react";
import { IFormCard } from "@/pages/Forms/Forms";

const mockOnSubmit: (cards: IFormCard) => void = () => {};

test("render Form component", () => {
  render(<Form onSubmit={mockOnSubmit} />);
  const element = screen.getByRole("button");
  expect(element).toBeInTheDocument();
});
