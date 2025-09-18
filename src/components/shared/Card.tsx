import { ReactNode } from "react";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faArrowsAlt, faColumns } from "@fortawesome/free-solid-svg-icons";

interface CardProps {
  icon: IconDefinition;
  children: ReactNode;
  isFullscreen: boolean;
  otherFullscreen: boolean;
  onToggleFullscreen: () => void;
  dataTestId?: string;
  className?: string;
}

export const Card = ({
  icon,
  children,
  isFullscreen,
  otherFullscreen,
  onToggleFullscreen,
  className,
  dataTestId,
}: CardProps) => {
  const cardClasses = classNames(
    "basis-1/2 bg-gray-100 w-full flex flex-col rounded-[50px] overflow-hidden shadow-[41px_41px_82px_#cccccc,-41px_-41px_82px_#ffffff] transition-all duration-250",
    {
      "basis-full !mb-0 lg:!mr-0": isFullscreen && !otherFullscreen,
      "w-0 h-0 !basis-0 !m-0": !isFullscreen && otherFullscreen,
    },
    className
  );

  return (
    <div className={cardClasses} data-testid={dataTestId}>
      <header className="bg-gray-100 p-4 text-center">
        <FontAwesomeIcon icon={icon} size="2x" />
      </header>
      {children}
      <footer className="bg-gray-100 p-4 text-center">
        <button
          data-testid={`${dataTestId}-fullscreen`}
          className="w-10 h-10 border-none rounded-full bg-[linear-gradient(145deg,#ffffff,#d8d8d8)] shadow-[4px_4px_8px_#cccccc,-4px_-4px_8px_#ffffff] cursor-pointer outline-none hover:bg-[linear-gradient(145deg,#d8d8d8,#ffffff)]"
          onClick={onToggleFullscreen}
          aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
        >
          <FontAwesomeIcon icon={isFullscreen ? faColumns : faArrowsAlt} />
        </button>
      </footer>
    </div>
  );
};
