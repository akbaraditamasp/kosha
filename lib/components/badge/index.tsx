import { styling } from "./styling";
import { BadgeTypes } from "./types";

export default function Badge<Appearance extends keyof typeof styling>({
  appearance = "basic" as Appearance,
  color = "primary" as const,
  children,
  button,
}: BadgeTypes<Appearance>) {
  const style = styling[appearance];

  return (
    <span
      className={`inline-block ml-[0.5%] py-0.5 px-2.5 -my-2 text-[90%] ${
        button ? "rounded-full" : style.base
      } ${
        button
          ? "bg-black bg-opacity-20"
          : style.colors[color as keyof typeof style.colors]
      } font-ubuntu font-light`}
    >
      {children}
    </span>
  );
}
