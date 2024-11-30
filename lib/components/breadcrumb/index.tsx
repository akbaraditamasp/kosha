import { ElementType, FC } from "react";
import { BreadcrumbProps } from "./types";

export default function Breadcrumb<Element extends ElementType = "span">({
  as = "span" as Element,
  className,
  ...props
}: BreadcrumbProps<Element>) {
  const Component = as as FC<typeof props>;

  return (
    <div className={`breadcrumb inline-table ${className || ""}`}>
      <Component {...props} />
    </div>
  );
}
