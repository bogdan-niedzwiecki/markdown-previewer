import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { useFullscreenContext } from "@context/FullscreenContext";
import { useInputContext } from "@context/InputContext";
import { Card } from "../shared/Card";
import { contentAreaClasses } from "../shared/styles";

const Input = () => {
  const { inputValue, onInputChange } = useInputContext();
  const { isInputFullscreen, isOutputFullscreen, toggleInputFullscreen } =
    useFullscreenContext();

  return (
    <Card
      icon={faMarkdown}
      isFullscreen={isInputFullscreen}
      otherFullscreen={isOutputFullscreen}
      onToggleFullscreen={toggleInputFullscreen}
      className="mb-3 lg:mb-0 lg:mr-3"
      dataTestId="input-card"
    >
      <textarea
        data-testid="input"
        className={contentAreaClasses}
        cols={100}
        rows={30}
        value={inputValue}
        onChange={onInputChange}
      />
    </Card>
  );
};

export default Input;
