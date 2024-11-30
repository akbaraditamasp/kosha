import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  LegacyRef,
  forwardRef,
} from "react";
import { IconType } from "react-icons";
import { CgChevronDown } from "react-icons/cg";

export const Button = forwardRef(function Button<
  T extends Appearance = "basic"
>(
  {
    appearance = "basic" as T,
    color = "primary",
    children,
    className,
    size = "base",
    icon: Icon,
    dropdown,
    ...props
  }: ButtonProps<T> &
    Omit<
      DetailedHTMLProps<
        ButtonHTMLAttributes<HTMLButtonElement>,
        HTMLButtonElement
      >,
      keyof ButtonProps
    >,
  ref: LegacyRef<HTMLButtonElement>
) {
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
});

export type ButtonProps<T extends Appearance = "basic"> = {
  appearance?: Appearance;
  color?: Color<T>;
  size?: keyof typeof sizes;
  icon?: IconType;
  dropdown?: boolean;
};

type Appearance = keyof typeof styling;
type Color<T extends Appearance> = keyof (typeof styling)[T]["colors"];

const border = {
  primary:
    "border-primary-600 hover:bg-primary-600 disabled:border-primary-300 disabled:bg-transparent text-primary-700 hover:text-white disabled:text-primary-300",
  info: "border-info-500 hover:bg-info-500 disabled:border-info-300 disabled:bg-transparent text-info-600 hover:text-white disabled:text-info-300",
  danger:
    "border-danger-600 hover:bg-danger-600 disabled:border-danger-300 disabled:bg-transparent text-danger-700 hover:text-white disabled:text-danger-300",
  success:
    "border-success-500 hover:bg-success-500 disabled:border-success-300 disabled:bg-transparent text-success-600 hover:text-white disabled:text-success-300",
  dark: "border-neutral-800 hover:bg-neutral-800 disabled:border-neutral-600 disabled:bg-transparent text-neutral-900 hover:text-white disabled:text-neutral-700",
  secondary:
    "border-secondary-600 hover:border-secondary-500 hover:bg-secondary-500 disabled:border-secondary-300 disabled:bg-transparent text-secondary-700 hover:text-neutral-900 disabled:text-neutral-700 disabled:text-secondary-400",
  warning:
    "border-warning-600 hover:border-warning-500 hover:bg-warning-500 disabled:border-warning-400 disabled:bg-transparent text-warning-700 hover:text-neutral-900 disabled:text-neutral-700 disabled:text-warning-600",
  light:
    "border-neutral-400 hover:border-neutral-300 hover:bg-neutral-300 disabled:border-neutral-200 disabled:bg-transparent text-neutral-800 hover:text-neutral-900 disabled:text-neutral-600",
} as const;

const background = {
  primary:
    "border-transparent bg-primary-600 hover:bg-primary-700 disabled:bg-primary-300 text-white",
  info: "border-transparent bg-info-500 hover:bg-info-600 disabled:bg-info-300 text-white",
  danger:
    "border-transparent bg-danger-600 hover:bg-danger-700 disabled:bg-danger-300 text-white",
  success:
    "border-transparent bg-success-500 hover:bg-success-600 disabled:bg-success-300 text-white",
  dark: "border-transparent bg-neutral-800 hover:bg-neutral-900 disabled:bg-neutral-700 text-white",
  secondary:
    "border-transparent bg-secondary-500 hover:bg-secondary-600 disabled:bg-secondary-300 text-neutral-900 disabled:text-neutral-700",
  warning:
    "border-transparent bg-warning-500 hover:bg-warning-600 disabled:bg-warning-300 text-neutral-900 disabled:text-neutral-700",
  light:
    "border-transparent bg-neutral-300 hover:bg-neutral-400 disabled:bg-neutral-200 text-neutral-900 disabled:text-neutral-700",
} as const;

const styling = {
  basic: {
    base: "rounded border",
    colors: background,
  },
  rounded: {
    base: "rounded-full border",
    colors: background,
  },
  outlined: {
    base: "rounded border",
    colors: border,
  },
  "outlined rounded": {
    base: "rounded-full border",
    colors: border,
  },
} as const;

const sizes = {
  xs: "py-2 px-3 text-xs space-x-1",
  sm: "py-2 px-3 text-sm space-x-1",
  base: "py-2 px-3 text-base space-x-1.5",
  lg: "py-2 px-4 text-lg space-x-2.5",
} as const;
