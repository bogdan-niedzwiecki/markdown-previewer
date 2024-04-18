import { useState, useContext, createContext } from "react";
import { FullscreenContextProps } from "./FullscreenContext.types";
import { initalState } from "./FullscreenContext.constants";

export const FullscreenContext = createContext(initalState);

export function FullscreenContextProvider({
  children,
}: FullscreenContextProps) {
  const [isInputFullscreen, setInputFullscreen] = useState<boolean>(false);
  const [isOutputFullscreen, setOutputFullscreen] = useState<boolean>(false);

  const toggleInputFullscreen = () => {
    setInputFullscreen((isInputFullscreen) => !isInputFullscreen);
  };

  const toggleOutputFullscreen = () => {
    setOutputFullscreen((isOutputFullscreen) => !isOutputFullscreen);
  };

  return (
    <FullscreenContext.Provider
      value={{
        isInputFullscreen,
        isOutputFullscreen,
        toggleInputFullscreen,
        toggleOutputFullscreen,
      }}
    >
      {children}
    </FullscreenContext.Provider>
  );
}
export const useFullscreenContext = () => useContext(FullscreenContext);
