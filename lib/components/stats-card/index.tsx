import { colorsStyle } from "./styling";
import { StatsCardProps } from "./types";

export function StatsCard({
  color = "primary",
  label,
  children,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="bg-white rounded p-3 border border-neutral-300 flex justify-start items-center space-x-3">
      <div
        className={`w-12 h-12 bg-gradient-to-br rounded flex justify-center items-center text-3xl ${colorsStyle[color]}`}
      >
        <Icon />
      </div>
      <div className="flex-1">
        <div className="font-bold text-lg font-montserrat text-neutral-900">
          {children}
        </div>
        <div className="font-ubuntu font-medium text-sm text-neutral-700">
          {label}
        </div>
      </div>
    </div>
  );
}
