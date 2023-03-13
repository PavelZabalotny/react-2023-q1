import { expect, test } from "vitest";
import { render } from "@testing-library/react";
import Footer from "./Footer";
import React from "react";

test("render Footer component", () => {
  const { container } = render(<Footer />);
  const img = container.querySelectorAll("img");
  expect(img.length).toBe(2);
});
