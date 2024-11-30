import { IconType } from "react-icons";
import { colors } from "./styling";
import { ReactNode } from "react";

export type StatsCardProps = {
  icon: IconType;
  color?: (typeof colors)[number];
  label?: string;
  children?: ReactNode;
};
