import { HTMLProps, useEffect, useState } from "react";
import { IconType } from "react-icons";
import { MdClose } from "react-icons/md";

const styling = {
  basic: {
    danger: "border-transparent bg-danger-600 text-white",
    dark: "border-transparent bg-neutral-800 text-white",
    info: "border-transparent bg-info-500 text-white",
    light: "border-transparent bg-neutral-200 text-neutral-800",
    primary: "border-transparent bg-primary-600 text-white",
    secondary: "border-transparent bg-secondary-400 text-neutral-800",
    success: "border-transparent bg-success-500 text-white",
    warning: "border-transparent bg-warning-500 text-neutral-800",
  },
  light: {
    danger: "bg-danger-100 text-danger-700 border-danger-200",
    info: "bg-info-100 text-info-700 border-info-200",
    primary: "bg-primary-50 text-primary-700 border-primary-200",
    secondary: "bg-secondary-200 text-secondary-800 border-secondary-300",
    success: "bg-success-100 text-success-700 border-success-200",
    warning: "bg-warning-200 text-warning-800 border-warning-400",
  },
} as const;

export function Alert<
  Appearance extends keyof typeof styling = "basic",
  Color extends keyof (typeof styling)[Appearance] = "primary"
>({
  appearance = "basic" as Appearance,
  color = "primary" as Color,
  className,
  children,
  icon: Icon,
  dismissable,
  title,
  ...props
}: AlertProps<Appearance, Color> &
  Omit<HTMLProps<HTMLDivElement>, keyof AlertProps>) {
  const [dismiss, setDismiss] = useState(false);
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (!show) {
      const timeout = setTimeout(() => {
        setDismiss(true);
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [show]);

  if (dismiss) return null;

  return (
    <div
      {...props}
      className={`${
        styling[appearance][color]
      } relative border rounded px-5 py-4 flex justify-start items-start ${className} ${
        show ? "opacity-100" : "opacity-0"
      } transition duration-1000`}
    >
      {Icon && (
        <div className="mr-3 mt-0.5 text-xl">
          <Icon />
        </div>
      )}
      <div className={`flex-1 ${dismissable ? "mr-6" : ""}`}>
        {Boolean(title) && (
          <div className="text-xl font-ubuntu font-bold mb-1">{title}</div>
        )}
        <div>{children}</div>
      </div>
      {dismissable && (
        <button
          onClick={() => setShow(false)}
          type="button"
          className="text-xl py-1 px-3 absolute top-3 right-0 mt-0.5 opacity-50"
        >
          <MdClose />
        </button>
      )}
    </div>
  );
}

export type AlertProps<
  Appearance extends keyof typeof styling = "basic",
  Color extends keyof (typeof styling)[Appearance] = "primary"
> = {
  appearance?: Appearance;
  color?: Color;
  icon?: IconType;
  dismissable?: boolean;
  title?: string;
};
