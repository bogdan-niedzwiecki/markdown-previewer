import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { InputProps } from "./Input.types";

const Input = ({
  value,
  isInputFullscreen,
  isOutputFullscreen,
  handleInputFullscreenClick,
  handleInputChange,
}: InputProps) => {
  const card = classNames("card card--left", {
    "card--fullscreen": isInputFullscreen && !isOutputFullscreen,
    "card--hidden": !isInputFullscreen && isOutputFullscreen,
  });

  return (
    <div className={card} data-testid="input-card">
      <header className="card__header">
        <FontAwesomeIcon icon={faMarkdown} size="2x" />
      </header>
      <textarea
        data-testid="input"
        className="card__content"
        cols={100}
        rows={30}
        value={value}
        onChange={handleInputChange}
      />
      <footer className="card__footer">
        <button
          data-testid="input-fullscreen"
          className="card__button"
          onClick={handleInputFullscreenClick}
        >
          {isInputFullscreen ? (
            <FontAwesomeIcon icon={faColumns} size="2x" />
          ) : (
            <FontAwesomeIcon icon={faArrowsAlt} size="2x" />
          )}
        </button>
      </footer>
    </div>
  );
};

export default Input;
