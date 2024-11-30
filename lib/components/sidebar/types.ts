import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";
import { IconType } from "react-icons";

type Props = {
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

type ChildProps = {
  active?: boolean;
  element: string;
  children?: SidebarChildProps[];
};

export type SidebarChildProps = ChildProps &
  Omit<
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    keyof ChildProps
  >;

export type SidebarProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  keyof Props
> &
  Props;

export interface Sidebar extends FC<Props> {
  Child: FC<SidebarChildProps>;
}
