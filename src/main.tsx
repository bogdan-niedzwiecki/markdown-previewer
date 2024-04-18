import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FullscreenContextProvider } from "@context/FullscreenContext";
import { InputContextProvider } from "@context/InputContext";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <InputContextProvider>
      <FullscreenContextProvider>
        <App />
      </FullscreenContextProvider>
    </InputContextProvider>
  </StrictMode>
);
