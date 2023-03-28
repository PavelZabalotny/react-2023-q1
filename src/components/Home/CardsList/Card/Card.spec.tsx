import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import { IFakeData } from "@/interfaces/fakeData.interface";
import React from "react";

test("render Card component", () => {
  const title = "card title";
  const cardProps: IFakeData = { id: "1", title, description: "", image: "", price: "" };
  render(<Card props={cardProps} />);
  const element = screen.getByRole("heading", { level: 3 });
  expect(element).toBeInTheDocument();
});
