import { Icon } from ".";
import clsx from "clsx";
import { useCallback } from "react";

function ThemeToggle() {
  const toggle = useCallback(() => {
    const element = document.documentElement;

    element.classList.toggle("dark");
  }, []);

  return (
    <button className="flex items-center gap-2 p-2" onClick={toggle}>
      <span className="w-4 md:w-6">
        <Icon.Moon />
      </span>

      <span className="text-xs md:text-base">Dark Mode</span>
    </button>
  );
}

export function Header() {
  return (
    <header className="px-4 py-6 shadow-md dark:bg-blue-dark">
      <div
        className={clsx(
          "container mx-auto",
          "flex justify-between items-center"
        )}
      >
        <h1 className={clsx("text-sm md:text-2xl", "font-bold")}>
          Where in the world?
        </h1>

        <ThemeToggle />
      </div>
    </header>
  );
}
