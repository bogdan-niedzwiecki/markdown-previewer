import { useState, useContext, createContext, ChangeEvent } from "react";
import { InputContextProps } from "./FullscreenContext.types";
import { initalState, inputDefaultValue } from "./FullscreenContext.constants";

export const InputContext = createContext(initalState);

export function InputContextProvider({ children }: InputContextProps) {
  const [inputValue, setInputValue] = useState<string>(inputDefaultValue);

  const onInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <InputContext.Provider
      value={{
        inputValue,
        onInputChange,
      }}
    >
      {children}
    </InputContext.Provider>
  );
}
export const useInputContext = () => useContext(InputContext);
