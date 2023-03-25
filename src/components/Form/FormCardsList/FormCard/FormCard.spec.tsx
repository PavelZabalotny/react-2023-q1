import { test } from "vitest";
import { render, screen } from "@testing-library/react";
import FormCard from "@/components/Form/FormCardsList/FormCard/FormCard";
import { IFormCard } from "@/pages/Forms/Forms";

const imgElement = document.createElement("img");

const mockCard: IFormCard = {
  id: "516684a1sd6asd6",
  cardBorderColor: "blue",
  date: "2023-03-25",
  title: "card title",
  category: "artCategory",
  isCardVisible: true,
  img: imgElement,
};

test("render FormCard component", () => {
  render(<FormCard card={mockCard} />);
  const element = screen.getByText(/card title/i);
  expect(element).toBeInTheDocument();
});
