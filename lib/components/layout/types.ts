import { ReactNode } from "react";
import { SidebarProps } from "#kosha";

export type LayoutProps = {
  header?: ReactNode;
  sidebars?: { groupName?: string; contents: SidebarProps[] }[];
  title?: string;
  accessories?: ReactNode;
  children?: ReactNode;
};
