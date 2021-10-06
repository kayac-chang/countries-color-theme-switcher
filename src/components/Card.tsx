import clsx from "clsx";
import { ReactNode, isValidElement, cloneElement } from "react";

type CardProps = {
  children?: ReactNode;
};
export function Card({ children }: CardProps) {
  if (!isValidElement(children)) return <>{children}</>;

  return cloneElement(children, {
    ...children.props,
    className: clsx(
      "shadow-md rounded overflow-hidden",
      children.props.className
    ),
  });
}
