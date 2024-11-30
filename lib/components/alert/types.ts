import { IconType } from "react-icons";
import { styling } from "./styling";

export type AlertProps<
  Appearance extends keyof typeof styling = "basic",
  Color extends keyof (typeof styling)[Appearance] = "primary"
> = {
  appearance?: Appearance;
  color?: Color;
  icon?: IconType;
  dismissable?: boolean;
  title?: string;
};
