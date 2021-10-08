import { Data } from "@/components";
import clsx from "clsx";

type ListProps = {
  className?: string;
  item: Record<string, string>;
};
export function List({ className, item }: ListProps) {
  return (
    <ul className={clsx("flex flex-col gap-2", className)}>
      {Object.entries(item).map(([key, value]) => (
        <li key={key}>
          <Data title={key} value={value} />
        </li>
      ))}
    </ul>
  );
}
