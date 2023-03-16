import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import App from "@/App";
import userEvent from "@testing-library/user-event";

test("full app rendering/navigating", async () => {
  const user = userEvent.setup();
  render(<App />);
  const appElement = screen.getByRole("banner");
  expect(appElement).toBeInTheDocument();

  const aboutNavElement = screen.getByText(/about page/i);
  await user.click(aboutNavElement);
  const aboutElement = await screen.findByText("About Us");
  expect(aboutElement).toBeInTheDocument();
});
