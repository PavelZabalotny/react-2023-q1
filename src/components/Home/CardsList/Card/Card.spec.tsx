import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "./Card";
import React from "react";

import { IPeople } from "@/interfaces/people.interface";

const mockCard: IPeople = {
  name: "Pavel555",
  birth_year: "1999",
  gender: "male",
  eye_color: "red",
  hair_color: "black",
  height: "188",
  mass: "75",
  skin_color: "brown",
};

test("render Card component", () => {
  render(<Card card={mockCard} />);
  const element = screen.getByText("Pavel555");
  expect(element).toBeInTheDocument();
});
