import { Data } from "@/components";

type ListProps = {
  item: Record<string, string>;
};
export function List({ item }: ListProps) {
  return (
    <ul className="flex flex-col gap-2">
      {Object.entries(item).map(([key, value]) => (
        <li key={key}>
          <Data title={key} value={value} />
        </li>
      ))}
    </ul>
  );
}
