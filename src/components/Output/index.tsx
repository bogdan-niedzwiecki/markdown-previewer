import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { marked } from "marked";
import { useInputContext } from "@context/InputContext";
import { useFullscreenContext } from "@context/FullscreenContext";
import { Card } from "../shared/Card";
import { contentAreaClasses } from "../shared/styles";

const Output = () => {
  const { inputValue } = useInputContext();
  const { isInputFullscreen, isOutputFullscreen, toggleOutputFullscreen } =
    useFullscreenContext();

  return (
    <Card
      icon={faHtml5}
      isFullscreen={isOutputFullscreen}
      otherFullscreen={isInputFullscreen}
      onToggleFullscreen={toggleOutputFullscreen}
      dataTestId="output-card"
    >
      <div
        data-testid="output"
        className={contentAreaClasses}
        dangerouslySetInnerHTML={{ __html: marked(inputValue) }}
      />
    </Card>
  );
};

export default Output;
