import { ButtonHTMLAttributes, DetailedHTMLProps, useState } from "react";
import { IconType } from "react-icons";
import { BiChevronDown } from "react-icons/bi";

export type SidebarProps = {
  active?: boolean;
  icon: IconType;
  element: string;
  children?: (SidebarChildProps &
    Omit<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      keyof SidebarChildProps
    >)[];
};

export type SidebarChildProps = {
  active?: boolean;
  element: string;
  children?: (SidebarChildProps &
    Omit<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      keyof SidebarChildProps
    >)[];
};

export function Sidebar({
  active,
  icon: Icon,
  className,
  element,
  children,
  onClick,
  ...props
}: Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  keyof SidebarProps
> &
  SidebarProps) {
  const [dropdownToggle, setDropdownToggle] = useState(Boolean(active));

  return (
    <>
      <button
        {...props}
        onClick={
          children?.length ? () => setDropdownToggle((val) => !val) : onClick
        }
        type="button"
        className={`flex-shrink-0 rounded ${
          active ? "bg-primary-700" : "bg-white hover:bg-neutral-200"
        } font-ubuntu flex justify-start items-center overflow-hidden text-left group ${className}`}
      >
        <span
          className={`h-12 w-12 flex justify-center items-center text-xl ${
            active
              ? "bg-primary-800 text-secondary-400"
              : "text-neutral-900 group-hover:bg-neutral-300"
          }`}
        >
          <Icon />
        </span>
        <span
          className={`flex-1 border-l pl-3 ${
            active
              ? "text-neutral-100 border-transparent"
              : "text-neutral-800 border-neutral-300 hover:border-transparent"
          }`}
        >
          {element}
        </span>
        {children?.length && (
          <span
            className={`px-2 text-neutral-500 text-xl transition transform ${
              dropdownToggle ? "rotate-0" : "-rotate-90"
            }`}
          >
            <BiChevronDown />
          </span>
        )}
      </button>
      {Boolean(children?.length) && (
        <div
          className={`ml-12 !mt-0 flex flex-col space-y-1 transition-all duration-700 overflow-y-hidden ${
            dropdownToggle ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          {children?.map((item, index) => (
            <SidebarChild key={`${index}`} {...item} />
          ))}
        </div>
      )}
    </>
  );
}

export function SidebarChild({
  active,
  className,
  element,
  children,
  onClick,
  ...props
}: Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  keyof SidebarChildProps
> &
  SidebarChildProps) {
  const [dropdownToggle, setDropdownToggle] = useState(active);

  return (
    <>
      <button
        {...props}
        onClick={
          children?.length ? () => setDropdownToggle((val) => !val) : onClick
        }
        type="button"
        className={`relative flex justify-start items-center pl-3 py-2 text-left font-ubuntu ${
          active
            ? "text-primary-700 font-medium"
            : "text-neutral-800 hover:text-primary-700 font-normal"
        } ${className}`}
      >
        <span className="flex-1">{element}</span>
        {children?.length && (
          <span
            className={`px-2 text-neutral-500 text-xl transition transform ${
              dropdownToggle ? "rotate-0" : "-rotate-90"
            }`}
          >
            <BiChevronDown />
          </span>
        )}
      </button>
      {Boolean(children?.length) && (
        <div
          className={`ml-6 !mt-0 flex flex-col space-y-1 transition-all duration-700 overflow-y-hidden ${
            dropdownToggle ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          {children?.map((item, index) => (
            <SidebarChild key={`${index}`} {...item} />
          ))}
        </div>
      )}
    </>
  );
}
