import { ReactNode } from "react";
import { styling } from "./styling";

export type BadgeTypes<Appearance extends keyof typeof styling = "basic"> = {
  children?: ReactNode;
  appearance?: Appearance;
  color?: keyof (typeof styling)[Appearance]["colors"];
  button?: boolean;
};
