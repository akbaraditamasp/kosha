import { IconType } from "react-icons";
import { sizes, styling } from "./styling";
import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

type Props<T extends keyof typeof styling = "basic"> = {
  appearance?: T;
  color?: keyof (typeof styling)[T]["colors"];
  size?: keyof typeof sizes;
  icon?: IconType;
  dropdown?: boolean;
};

export type ButtonProps<T extends keyof typeof styling = "basic"> = Props<T> &
  Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    keyof Props
  >;
