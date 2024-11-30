import { BiUser } from "react-icons/bi";
import { AvatarProps } from "./types";
import { sizing, statusColor } from "./styling";

export default function Avatar({
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
