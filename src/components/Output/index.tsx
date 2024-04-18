import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { marked } from "marked";
import { useInputContext } from "@context/InputContext";
import { useFullscreenContext } from "@context/FullscreenContext";

const Output = () => {
  const { inputValue } = useInputContext();
  const { isInputFullscreen, isOutputFullscreen, toggleOutputFullscreen } =
    useFullscreenContext();

  const card = classNames("card card--right", {
    "card--fullscreen": !isInputFullscreen && isOutputFullscreen,
    "card--hidden": isInputFullscreen && !isOutputFullscreen,
  });

  return (
    <div className={card} data-testid="output-card">
      <header className="card__header">
        <FontAwesomeIcon icon={faHtml5} size="2x" />
      </header>
      <div
        data-testid="output"
        className="card__content"
        dangerouslySetInnerHTML={{ __html: marked(inputValue) }}
      />
      <footer className="card__footer">
        <button
          data-testid="output-fullscreen"
          className="card__button"
          onClick={toggleOutputFullscreen}
        >
          {isOutputFullscreen ? (
            <FontAwesomeIcon icon={faColumns} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faArrowsAlt} size="2x" />
          )}
        </button>
      </footer>
    </div>
  );
};

export default Output;
