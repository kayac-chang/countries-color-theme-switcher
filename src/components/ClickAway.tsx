import {
  cloneElement,
  isValidElement,
  ReactNode,
  useEffect,
  useRef,
} from "react";

type ClickAwayProps = {
  children?: ReactNode;
  onClickAway?: () => void;
};
export function ClickAway({ children, onClickAway }: ClickAwayProps) {
  if (!isValidElement(children))
    throw new Error(`Should be valid react element.`);

  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current || !onClickAway) return;

    const element = ref.current;

    function onClick(event: MouseEvent) {
      if (element.contains(event.target as Element)) return;

      onClickAway?.();
    }

    window.addEventListener("click", onClick);

    return () => window.removeEventListener("click", onClick);
  }, []);

  return cloneElement(children, {
    ...children.props,
    ref,
  });
}
