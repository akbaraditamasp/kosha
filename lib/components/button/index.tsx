import { LegacyRef, forwardRef } from "react";
import { CgChevronDown } from "react-icons/cg";
import { sizes, styling } from "./styling";
import { ButtonProps } from "./types";

const Button = <T extends keyof typeof styling = "basic">(
  {
    appearance = "basic" as T,
    color = "primary",
    children,
    className,
    size = "base",
    icon: Icon,
    dropdown,
    ...props
  }: ButtonProps<T>,
  ref: LegacyRef<HTMLButtonElement>
) => {
  const appearanceStyling = styling[appearance];
  return (
    <button
      ref={ref}
      {...props}
      className={`${sizes[size]} ${appearanceStyling.base} ${
        appearanceStyling.colors[color as keyof typeof appearanceStyling.colors]
      } ${className} inline-flex justify-center items-center`}
    >
      {Icon && <Icon />}
      {Boolean(children) && <span>{children}</span>}
      {dropdown && (
        <span className="pl-0.5 opacity-70">
          <CgChevronDown />
        </span>
      )}
    </button>
  );
};

export default forwardRef(Button);
