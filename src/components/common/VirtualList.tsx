import clsx from "clsx";
import { clamp } from "ramda";
import {
  ReactNode,
  UIEvent,
  UIEventHandler,
  useState,
  useCallback,
} from "react";

const range = (length: number) => Array.from({ length }, (_, index) => index);

function useScroll<T extends HTMLElement>(): [number, UIEventHandler<T>] {
  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = useCallback(
    (event: UIEvent<T>) => {
      const { scrollTop } = event.target as T;

      requestAnimationFrame(() => setScrollTop(scrollTop));
    },
    [setScrollTop]
  );

  return [scrollTop, onScroll];
}

type VirtualListProps<T> = {
  rowHeight: number;
  visibleCount: number;
  gap: number;
  list: T[];
  children?: (item: T) => ReactNode;
  classes?: Partial<{
    wrapper: string;
    list: string;
  }>;
};
export function VirtualList<T>({
  rowHeight,
  visibleCount,
  gap,
  list,
  children,
  classes,
}: VirtualListProps<T>) {
  const [scrollTop, onScroll] = useScroll();

  const _rowHeight = rowHeight + gap;

  const viewportHeight = _rowHeight * visibleCount - gap;
  const totalHeight = _rowHeight * list.length - gap;

  const startIndex = clamp(
    0,
    Math.max(0, list.length - visibleCount),
    Math.floor(scrollTop / _rowHeight)
  );

  return (
    <div
      style={{ height: viewportHeight + "px" }}
      className={clsx("overflow-auto", classes?.wrapper)}
      onScroll={onScroll}
    >
      <ul
        style={{
          height: totalHeight + "px",
          willChange: "transform",
          transform: `translateY(${startIndex * _rowHeight}px)`,
        }}
        className={classes?.list}
      >
        {children &&
          range(visibleCount + 1)
            .filter((index) => list[startIndex + index])
            .map((index) => (
              <li
                key={startIndex + index}
                style={{ height: rowHeight + "px", marginBottom: gap + "px" }}
              >
                {children?.(list[startIndex + index])}
              </li>
            ))}
      </ul>
    </div>
  );
}
