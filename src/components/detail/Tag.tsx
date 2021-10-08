import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ButtonLike } from "@/components";
import clsx from "clsx";

type TagProps = {
  className?: string;
  children?: ReactNode;
  href?: string;
};
export function Tag({ className, children, href }: TagProps) {
  return (
    <ButtonLike>
      <Link className={clsx("py-2", className)} to={href || "#"}>
        {children}
      </Link>
    </ButtonLike>
  );
}
