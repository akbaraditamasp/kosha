import { ComponentPropsWithRef, ElementType } from "react";

type Props<Element extends ElementType = "span"> = {
  as?: Element;
  className?: string;
};

export type BreadcrumbProps<Element extends ElementType = "span"> = Omit<
  ComponentPropsWithRef<Element>,
  keyof Props<Element>
> &
  Props<Element>;
