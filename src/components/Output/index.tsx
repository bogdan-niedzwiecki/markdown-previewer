import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import { marked } from "marked";
import { OutputProps } from "./Output.types";

const Output = ({
  value,
  isInputFullscreen,
  isOutputFullscreen,
  handleOutputFullscreenClick,
}: OutputProps) => {
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
        dangerouslySetInnerHTML={{ __html: marked(value) }}
      />
      <footer className="card__footer">
        <button
          data-testid="output-fullscreen"
          className="card__button"
          onClick={handleOutputFullscreenClick}
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
