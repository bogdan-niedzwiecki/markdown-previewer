import { ChangeEvent } from "react";

export interface InputProps {
  value: string;
  isInputFullscreen: boolean;
  isOutputFullscreen: boolean;
  handleInputFullscreenClick: () => void;
  handleInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}
