import clsx from "clsx";
import { ReactNode, isValidElement, cloneElement } from "react";

type CardProps = {
  className?: string;
  children?: ReactNode;
};
export function Card({ className, children }: CardProps) {
  if (!isValidElement(children)) return <>{children}</>;

  return cloneElement(children, {
    ...children.props,
    className: clsx(
      "shadow-md rounded overflow-hidden bg-white dark:bg-blue-dark",
      className,
      children.props.className
    ),
  });
}
