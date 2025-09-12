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

  const card = classNames(
    "basis-1/2 bg-gray-100 w-full flex flex-col rounded-[50px] overflow-hidden shadow-[41px_41px_82px_#cccccc,-41px_-41px_82px_#ffffff] transition-all duration-300",
    {
      "basis-full": !isInputFullscreen && isOutputFullscreen,
      "w-0 h-0 !basis-0 m-0": isInputFullscreen && !isOutputFullscreen,
    }
  );

  return (
    <div className={card} data-testid="output-card">
      <header className="bg-gray-100 p-4 text-center">
        <FontAwesomeIcon icon={faHtml5} size="2x" />
      </header>
      <div
        data-testid="output"
        className="overflow-y-auto border-none rounded-[10px] flex-1 p-5 outline-none resize-none bg-gray-100 shadow-[inset_5px_5px_10px_#dddddd,inset_-5px_-5px_10px_#ffffff] ml-4 mr-4 mb-2 sm:mb-0"
        dangerouslySetInnerHTML={{ __html: marked(inputValue) }}
      />
      <footer className="bg-gray-100 p-4 text-center">
        <button
          data-testid="output-fullscreen"
          className="w-10 h-10 border-none rounded-full bg-[linear-gradient(145deg,#ffffff,#d8d8d8)] shadow-[4px_4px_8px_#cccccc,-4px_-4px_8px_#ffffff] cursor-pointer outline-none hover:bg-[linear-gradient(145deg,#d8d8d8,#ffffff)]"
          onClick={toggleOutputFullscreen}
        >
          {isOutputFullscreen ? (
            <FontAwesomeIcon icon={faColumns} />
          ) : (
            <FontAwesomeIcon icon={faArrowsAlt} />
          )}
        </button>
      </footer>
    </div>
  );
};

export default Output;
