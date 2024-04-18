import { ChangeEvent, useState } from "react";
import classNames from "classnames";
import "./App.scss";
import { inputDefaultValue } from "./App.constans";
import Input from "@components/Input";
import Output from "@components/Output";

const App = () => {
  const [inputValue, setInputValue] = useState<string>(inputDefaultValue);
  const [isInputFullscreen, setInputFullscreen] = useState<boolean>(false);
  const [isOutputFullscreen, setOutputFullscreen] = useState<boolean>(false);

  const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleInputFullscreenClick = () => {
    setInputFullscreen((isInputFullscreen) => !isInputFullscreen);
  };

  const handleOutputFullscreenClick = () => {
    setOutputFullscreen((isOutputFullscreen) => !isOutputFullscreen);
  };

  const app = classNames("app", {
    "app--fullscreen": isInputFullscreen || isOutputFullscreen,
  });

  return (
    <div className={app}>
      <Input
        value={inputValue}
        isInputFullscreen={isInputFullscreen}
        isOutputFullscreen={isOutputFullscreen}
        handleInputFullscreenClick={handleInputFullscreenClick}
        handleInputChange={handleInputChange}
      />
      <Output
        value={inputValue}
        isInputFullscreen={isInputFullscreen}
        isOutputFullscreen={isOutputFullscreen}
        handleOutputFullscreenClick={handleOutputFullscreenClick}
      />
    </div>
  );
};

export default App;
