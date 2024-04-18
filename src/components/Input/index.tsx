import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt } from "@fortawesome/free-solid-svg-icons";
import { faColumns } from "@fortawesome/free-solid-svg-icons";
import { faMarkdown } from "@fortawesome/free-brands-svg-icons";
import { useFullscreenContext } from "@context/FullscreenContext";
import { useInputContext } from "@context/InputContext";

const Input = () => {
  const { inputValue, onInputChange } = useInputContext();
  const { isInputFullscreen, isOutputFullscreen, toggleInputFullscreen } =
    useFullscreenContext();

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
        value={inputValue}
        onChange={onInputChange}
      />
      <footer className="card__footer">
        <button
          data-testid="input-fullscreen"
          className="card__button"
          onClick={toggleInputFullscreen}
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
