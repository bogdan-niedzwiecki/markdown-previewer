import { ChangeEvent, ReactNode } from "react";

export interface InputContextResult {
  inputValue: string;
  onInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

export interface InputContextProps {
  children?: ReactNode | ReactNode[];
}
