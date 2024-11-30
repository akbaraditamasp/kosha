import { FC, HTMLProps } from "react";
import { headerColor } from "./styling";

type Props = {};
type HeadProps = {
  color?: keyof typeof headerColor;
};
type ContentProps = {};
type FooterProps = {};

export type CardContainerProps = Props &
  Omit<HTMLProps<HTMLDivElement>, keyof Props>;
export type CardHeadProps = HeadProps &
  Omit<HTMLProps<HTMLDivElement>, keyof HeadProps>;
export type CardContentProps = ContentProps &
  Omit<HTMLProps<HTMLDivElement>, keyof ContentProps>;
export type CardFooterProps = FooterProps &
  Omit<HTMLProps<HTMLDivElement>, keyof FooterProps>;

export interface Card extends FC<CardContainerProps> {
  Head: FC<CardHeadProps>;
  Content: FC<CardContentProps>;
  Footer: FC<CardFooterProps>;
}
