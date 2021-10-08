import { ReactNode } from "react";
import { ButtonLike } from "@/components";
import clsx from "clsx";

type TagProps = {
  className?: string;
  children?: ReactNode;
};
export function Tag({ className, children }: TagProps) {
  return (
    <ButtonLike>
      <a className={clsx("py-2", className)} href="">
        {children}
      </a>
    </ButtonLike>
  );
}
