import { describe, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import About from "./About";

describe("About page", () => {
  test("find About component by text", () => {
    render(<About />);
    const aboutElement = screen.getByText(/about/i);
    expect(aboutElement).toBeTruthy();
  });
});
