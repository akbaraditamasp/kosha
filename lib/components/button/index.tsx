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
    accessories,
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
      } ${className}`}
    >
      {Icon && (
        <span>
          <Icon className={`inline-flex ${children ? "mb-1" : "mb-0.5"}`} />
        </span>
      )}
      {Boolean(children) && <span>{children}</span>}
      {accessories}
      {dropdown && (
        <span className="pl-1 opacity-40 inline-block transform translate-y-[0.2rem]">
          <CgChevronDown />
        </span>
      )}
    </button>
  );
};

export default forwardRef(Button);
