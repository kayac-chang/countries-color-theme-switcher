import clsx from "clsx";
import { useCallback, useState } from "react";
import { Card, Icon, ClickAway } from "@/components";
import { not, identity } from "ramda";

interface Option {
  value: string;
  label: string;
}

type FakeLabelProps = {
  label?: string;
  value?: string;
  className?: string;
  onClick: () => void;
};
function FakeLabel({ className, label, value, onClick }: FakeLabelProps) {
  return (
    <button
      type="button"
      className={clsx("flex justify-between items-center flex-1", className)}
      onClick={onClick}
    >
      <span className="pl-4">{value || label}</span>

      <span className="w-4 m-4">
        <Icon.ChevronDown />
      </span>
    </button>
  );
}

type FakeOptionProps = {
  className?: string;
  label?: string;
  onClick: () => void;
};
function FakeOption({ className, label, onClick }: FakeOptionProps) {
  return (
    <button
      type="button"
      className={clsx(
        "flex w-full p-4",
        "hover:bg-gray-dark hover:text-white",
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

type FakeSelectProps = {
  classes?: {
    wrapper?: string;
    label?: string;
    option?: string;
  };
  label?: string;
  value: string;
  options: Option[];
  onSelect: (option: Option) => void;
};
function FakeSelect({
  classes,
  label,
  value,
  options,
  onSelect,
}: FakeSelectProps) {
  const [isExpand, setExpand] = useState(false);

  return (
    <ClickAway onClickAway={() => setExpand(false)}>
      <div className={clsx("inline-flex flex-col relative", classes?.wrapper)}>
        <Card>
          <FakeLabel
            className={classes?.label}
            label={label}
            value={value}
            onClick={() => setExpand(not)}
          />
        </Card>

        {isExpand && (
          <Card>
            <ul
              className={clsx(
                "flex flex-col w-full bg-white",
                "absolute top-full mt-1 z-10"
              )}
            >
              {options.map(({ label, value }) => (
                <li key={value}>
                  <FakeOption
                    className={classes?.option}
                    label={label}
                    onClick={() => {
                      onSelect({ label, value });
                      setExpand(false);
                    }}
                  />
                </li>
              ))}
            </ul>
          </Card>
        )}
      </div>
    </ClickAway>
  );
}

type SelectProps = {
  classes?: {
    wrapper?: string;
    label?: string;
    option?: string;
  };
  placeholder?: string;
  options: Option[];
};
export function Select({ classes, placeholder, options }: SelectProps) {
  const [current, setCurrent] = useState(placeholder ? -1 : 0);

  const onSelect = useCallback(
    ({ value }: Option) =>
      setCurrent(
        options.findIndex((option) => option.value === value)
        //
      ),
    [setCurrent]
  );

  return (
    <>
      <select
        name="filter"
        aria-label="Filter"
        className="sr-only"
        ref={(ref) => {
          if (!ref) return;

          ref.dispatchEvent(new Event("change", { bubbles: true }));
        }}
        value={options[current]?.value}
        onChange={identity}
      >
        {placeholder && <option value="-1">{placeholder}</option>}

        {options.map(({ label, value }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>

      <FakeSelect
        classes={classes}
        label={placeholder}
        value={options[current]?.value}
        options={options}
        onSelect={onSelect}
      />
    </>
  );
}
