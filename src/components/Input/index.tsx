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

  const card = classNames(
    "basis-1/2 mb-3 lg:mb-0 lg:mr-3 bg-gray-100 w-full flex flex-col rounded-[50px] overflow-hidden shadow-[41px_41px_82px_#cccccc,-41px_-41px_82px_#ffffff] transition-all duration-300",
    {
      "basis-full !mb-0 lg:!mr-0": isInputFullscreen && !isOutputFullscreen,
      "w-0 h-0 !basis-0 !m-0": !isInputFullscreen && isOutputFullscreen,
    }
  );

  return (
    <div className={card} data-testid="input-card">
      <header className="bg-gray-100 p-4 text-center">
        <FontAwesomeIcon icon={faMarkdown} size="2x" />
      </header>
      <textarea
        data-testid="input"
        className="overflow-y-auto border-none rounded-[10px] flex-1 p-5 outline-none resize-none bg-gray-100 shadow-[inset_5px_5px_10px_#dddddd,inset_-5px_-5px_10px_#ffffff] ml-4 mr-4 mb-2 sm:mb-0"
        cols={100}
        rows={30}
        value={inputValue}
        onChange={onInputChange}
      />
      <footer className="bg-gray-100 p-4 text-center">
        <button
          data-testid="input-fullscreen"
          className="w-10 h-10 border-none rounded-full bg-[linear-gradient(145deg,#ffffff,#d8d8d8)] shadow-[4px_4px_8px_#cccccc,-4px_-4px_8px_#ffffff] cursor-pointer outline-none hover:bg-[linear-gradient(145deg,#d8d8d8,#ffffff)]"
          onClick={toggleInputFullscreen}
        >
          {isInputFullscreen ? (
            <FontAwesomeIcon icon={faColumns} />
          ) : (
            <FontAwesomeIcon icon={faArrowsAlt} />
          )}
        </button>
      </footer>
    </div>
  );
};

export default Input;
