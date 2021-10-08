import clsx from "clsx";
import { Icon } from "@/components";

type SearchProps = {
  className?: string;
};
export function Search({ className }: SearchProps) {
  return (
    <label
      className={clsx(
        "flex items-center text-gray-dark dark:text-white",
        className
      )}
    >
      <span className="w-6 mx-6">
        <Icon.Search />
      </span>

      <span className="sr-only">Search for a country...</span>

      <input
        type="search"
        name="search"
        placeholder="Search for a country..."
        className="w-full p-1 outline-none placeholder-current"
      />
    </label>
  );
}
