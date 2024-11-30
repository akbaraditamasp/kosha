import { headerColor } from "./styling";
import {
  Card,
  CardContainerProps,
  CardContentProps,
  CardHeadProps,
} from "./types";

const Container = ({ className, children, ...props }: CardContainerProps) => {
  return (
    <div
      {...props}
      className={`bg-white rounded border border-neutral-200 flex flex-col overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
};

const Head = ({
  children,
  className,
  color = "default",
  ...props
}: CardHeadProps) => {
  return (
    <div
      {...props}
      className={`flex justify-start items-center p-5 border-b ${headerColor[color].wrapperClass} ${className}`}
    >
      <div
        className={`flex-1 text-lg font-bold ${headerColor[color].innerClass}`}
      >
        {children}
      </div>
    </div>
  );
};

const Content = ({ className, children, ...props }: CardContentProps) => {
  return (
    <div {...props} className={`p-5 ${className}`}>
      {children}
    </div>
  );
};

const Footer = ({ className, children, ...props }: CardContentProps) => {
  return (
    <div
      {...props}
      className={`mt-auto px-5 py-4 border-t border-neutral-100 ${className}`}
    >
      {children}
    </div>
  );
};

(Container as Card).Head = Head;
(Container as Card).Content = Content;
(Container as Card).Footer = Footer;

export default Container as Card;
