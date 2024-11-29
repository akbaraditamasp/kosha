import { ReactNode } from "react";
import { BiUser } from "react-icons/bi";

const sizes = ["sm", "base", "lg", "xl"] as const;
const statuses = [
  "primary",
  "secondary",
  "info",
  "warning",
  "danger",
  "success",
  "light",
  "dark",
] as const;

const statusColor: Record<(typeof statuses)[number], string> = {
  danger: "bg-danger-500",
  dark: "bg-neutral-800",
  info: "bg-info-500",
  light: "bg-neutral-200",
  primary: "bg-primary-500",
  secondary: "bg-secondary-500",
  success: "bg-success-500",
  warning: "bg-warning-500",
};

const sizing: Record<(typeof sizes)[number], string> = {
  sm: "w-8 h-8 text-base",
  base: "w-10 h-10 text-lg",
  lg: "w-12 h-12 text-2xl",
  xl: "w-16 h-16 text-4xl",
};

export type AvatarProps = {
  children?: ReactNode;
  size?: (typeof sizes)[number];
  status?: (typeof statuses)[number];
  className?: string;
  url?: string;
};

export function Avatar({
  url,
  size = "base",
  status,
  children = <BiUser />,
  className,
}: AvatarProps) {
  return (
    <div
      className={`${sizing[size]} rounded-full bg-neutral-300 ${className} relative`}
    >
      <div className="w-full h-full overflow-hidden rounded-full flex justify-center items-center">
        {url ? (
          <img src={url} className="w-full h-full object-cover" />
        ) : (
          children
        )}
      </div>
      {Boolean(status) && (
        <div
          className={`absolute bottom-0.5 right-0.5 w-[25%] aspect-square rounded-full ${
            statusColor[status!]
          }`}
        />
      )}
    </div>
  );
}
