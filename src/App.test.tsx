import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("Renders main page correctly", () => {
  it("Should transform markdown to html", () => {
    render(<App />);
    const input = screen.getByTestId("input");
    const output = screen.getByTestId("output");

    fireEvent.change(input, { target: { value: "# updated value" } }); // <h1>updated value</h1> in html

    expect(output.innerHTML.trim()).toBe("<h1>updated value</h1>");
  });

  it("Should show input card in fullscreen mode", () => {
    render(<App />);
    const inputFullscreenButton = screen.getByTestId("input-fullscreen");
    const inputCard = screen.getByTestId("input-card");

    fireEvent.click(inputFullscreenButton);

    expect(inputCard).toHaveClass("card--fullscreen");
  });

  it("Should show output card in fullscreen mode", () => {
    render(<App />);
    const outputFullscreenButton = screen.getByTestId("output-fullscreen");
    const outputCard = screen.getByTestId("output-card");

    fireEvent.click(outputFullscreenButton);
    expect(outputCard).toHaveClass("card--fullscreen");
  });
});
