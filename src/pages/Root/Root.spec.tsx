import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Root from "./Root";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RoutePaths } from "../../shared/constants";

const router = createBrowserRouter([
  {
    path: RoutePaths.Home,
    element: <Root />,
  },
]);

test("render Root component", () => {
  render(<RouterProvider router={router} />);
  const element = screen.getByRole("main");
  expect(element).toBeInTheDocument();
});
