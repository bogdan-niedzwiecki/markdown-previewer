import { describe, it, expect } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { InputContextProvider } from "@context/InputContext";
import { FullscreenContextProvider } from "@context/FullscreenContext";

const AppWithContext = () => (
  <InputContextProvider>
    <FullscreenContextProvider>
      <App />
    </FullscreenContextProvider>
  </InputContextProvider>
);

describe("Renders main page correctly", () => {
  it("Should transform markdown to html", () => {
    render(<AppWithContext />);
    const input = screen.getByTestId("input");
    const output = screen.getByTestId("output");

    fireEvent.change(input, { target: { value: "# updated value" } }); // <h1>updated value</h1> in html

    expect(output.innerHTML.trim()).toBe("<h1>updated value</h1>");
  });

  it("Should show input card in fullscreen mode", () => {
    render(<AppWithContext />);
    const inputFullscreenButton = screen.getByTestId("input-fullscreen");
    const inputCard = screen.getByTestId("input-card");

    fireEvent.click(inputFullscreenButton);

    expect(inputCard).toHaveClass("basis-full");
  });

  it("Should show output card in fullscreen mode", () => {
    render(<AppWithContext />);
    const outputFullscreenButton = screen.getByTestId("output-fullscreen");
    const outputCard = screen.getByTestId("output-card");

    fireEvent.click(outputFullscreenButton);
    expect(outputCard).toHaveClass("basis-full");
  });
});
