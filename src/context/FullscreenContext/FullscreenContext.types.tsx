import { ReactNode } from "react";

export interface FullscreenContextResult {
  isInputFullscreen: boolean;
  toggleInputFullscreen: () => void;
  isOutputFullscreen: boolean;
  toggleOutputFullscreen: () => void;
}

export interface FullscreenContextProps {
  children?: ReactNode | ReactNode[];
}
