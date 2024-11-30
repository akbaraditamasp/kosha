import { ReactNode } from "react";
import { sizes, statuses } from "./styling";

export type AvatarProps = {
  children?: ReactNode;
  size?: (typeof sizes)[number];
  status?: (typeof statuses)[number];
  className?: string;
  url?: string;
};
