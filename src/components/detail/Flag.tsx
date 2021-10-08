import { Card } from "@/components";
import clsx from "clsx";
import { CSSProperties } from "react";

type FlagProps = {
  className?: string;
  style?: CSSProperties;
  src: string;
  name: string;
};
export function Flag({ className, style, src, name }: FlagProps) {
  return (
    <Card>
      <div className={clsx("flex justify-center", className)} style={style}>
        <img src={src} alt={`${name}'s flag`} />
      </div>
    </Card>
  );
}
