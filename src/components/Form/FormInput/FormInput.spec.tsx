import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import FormInput from "@/components/Form/FormInput/FormInput";

test("render FormInput component", () => {
  render(
    <FormInput
      type="text"
      id="title"
      label="Title label"
      showError={true}
      errorMessage="Error message"
    />
  );
  const element = screen.getByText("Error message");
  expect(element).toBeInTheDocument();
});
