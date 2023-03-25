import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import FormSelect from "@/components/Form/FormSelect/FormSelect";

const mockCategories = ["artCategory", "any"];

test("render FormSelect with label Brown", () => {
  render(
    <FormSelect
      id="selectId"
      categories={mockCategories}
      label="label"
      showError={false}
      errorMessage=""
    />
  );
  const element = screen.getByText("artCategory");
  expect(element).toBeInTheDocument();
});
