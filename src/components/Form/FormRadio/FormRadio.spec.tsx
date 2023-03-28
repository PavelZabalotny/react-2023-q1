import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import FormRadio, { IRadioConfig } from "@/components/Form/FormRadio/FormRadio";

const mockConfig: IRadioConfig[] = [
  {
    ref: React.createRef<HTMLInputElement>(),
    label: "Brown",
    defaultValue: "brown",
  },
];

describe("render FormRadio component", () => {
  test("render FormRadio with label Brown", () => {
    render(
      <FormRadio name="radio" config={mockConfig} showError={false} errorMessage="error message" />
    );
    const element = screen.getByText("Brown");
    expect(element).toBeInTheDocument();
  });
  test("render FormInput with error message", () => {
    render(
      <FormRadio name="radio" config={mockConfig} showError={true} errorMessage="error message" />
    );
    const element = screen.getByText(/error message/i);
    expect(element).toBeInTheDocument();
  });
});
