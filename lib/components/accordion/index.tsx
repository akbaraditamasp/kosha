import { HTMLProps, useState } from "react";
import { CgChevronDown } from "react-icons/cg";
import { Accordion, AccordionItemProps } from "./types";

const Group = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={`rounded bg-white border border-neutral-200 overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

const Item = ({ title, children }: AccordionItemProps) => {
  const [shown, setShown] = useState(false);

  return (
    <div className="accordion">
      <button
        type="button"
        onClick={() => setShown((val) => !val)}
        className={`text-left w-full flex justify-start items-center transition ${
          shown
            ? "bg-primary-50 text-primary-800"
            : "bg-transparent text-neutral-800"
        }`}
      >
        <span className="flex-1 px-5 py-4">{title}</span>
        <span
          className={`px-5 text-xl transition transform text-neutral-600 ${
            shown ? "rotate-0" : "-rotate-90"
          }`}
        >
          <CgChevronDown />
        </span>
      </button>
      <div
        className={`${
          shown ? "border-t max-h-[9000px]" : "max-h-0"
        } transition-all duration-1000 border-neutral-300 overflow-hidden`}
      >
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

(Group as Accordion).Item = Item;

export default Group as Accordion;
