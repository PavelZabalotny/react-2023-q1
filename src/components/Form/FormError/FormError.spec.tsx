import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import FormError from "@/components/Form/FormError/FormError";

const mockMessage = "my custom error message";

test("render FormError component", () => {
  render(<FormError message={mockMessage} />);
  const element = screen.getByText(mockMessage);
  expect(element).toBeInTheDocument();
});
