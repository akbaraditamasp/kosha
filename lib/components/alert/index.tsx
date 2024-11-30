import { HTMLProps, useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { styling } from "./styling";
import { AlertProps } from "./types";

export default function Alert<
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
