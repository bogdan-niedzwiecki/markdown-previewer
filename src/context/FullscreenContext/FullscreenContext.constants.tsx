import { FullscreenContextResult } from "./FullscreenContext.types";

export const initalState: FullscreenContextResult = {
  isInputFullscreen: false,
  toggleInputFullscreen: () => {
    return;
  },
  isOutputFullscreen: false,
  toggleOutputFullscreen: () => {
    return;
  },
};
