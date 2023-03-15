import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "@/modules/common/ui/Header/Header";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <Header />,
  },
]);

test("render Header component", () => {
  render(<RouterProvider router={router} />);
  const element = screen.getByRole("banner");
  expect(element).toBeInTheDocument();
});
