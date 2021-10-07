import { ReactNode } from "react";
import { Card } from ".";

type ButtonLikeProps = {
  children: ReactNode;
};
export function ButtonLike({ children }: ButtonLikeProps) {
  return (
    <Card className="w-full inline-flex items-center justify-center gap-2">
      {children}
    </Card>
  );
}
