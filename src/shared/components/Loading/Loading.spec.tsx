import { render, screen } from "@testing-library/react";
import Loading from "./Loading";
import { expect } from "vitest";
import React from "react";

test("render Loading component", () => {
  render(<Loading />);
  const loadingElement = screen.getByTestId("loading");
  expect(loadingElement).toBeDefined();
});
