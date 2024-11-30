import { FC, HTMLProps, ReactNode } from "react";

export type AccordionItemProps = {
  title: ReactNode;
  children: ReactNode;
};

export interface Accordion extends FC<HTMLProps<HTMLDivElement>> {
  Item: FC<AccordionItemProps>;
}
