import { ReactNode } from "react";
import { ButtonLike } from "@/components";

type TagProps = {
  children?: ReactNode;
};
export function Tag({ children }: TagProps) {
  return (
    <ButtonLike>
      <a className="w-full py-2" href="">
        {children}
      </a>
    </ButtonLike>
  );
}
