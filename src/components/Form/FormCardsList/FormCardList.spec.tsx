import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import { IFormCard } from "@/pages/Forms/Forms";
import FormCardsList from "@/components/Form/FormCardsList/FormCardsList";

const imgElement = document.createElement("img");

const mockCards: IFormCard[] = [
  {
    id: "516684a1sd6asd6",
    cardBorderColor: "blue",
    date: "2023-03-25",
    title: "card title",
    category: "artCategory",
    isCardVisible: true,
    img: imgElement,
  },
  {
    id: "sad1f6sa4g6df",
    cardBorderColor: "red",
    date: "2023-03-21",
    title: "my custom title",
    category: "anyCategory",
    isCardVisible: true,
    img: imgElement,
  },
];

test("render FormCard component", () => {
  render(<FormCardsList cards={mockCards} />);
  const element = screen.getByText(/2023-03-21/i);
  expect(element).toBeInTheDocument();
});
