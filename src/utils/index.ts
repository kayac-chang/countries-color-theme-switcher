export function has<X extends {}, Y extends PropertyKey>(
  prop: Y,
  obj: X
): obj is X & Record<Y, unknown> {
  return obj.hasOwnProperty(prop);
}

export function isObject(obj: unknown): obj is object {
  return Boolean(obj) && typeof obj === "object";
}

export function isString(obj: unknown): obj is string {
  return Boolean(obj) && typeof obj === "string";
}

export function head<T>(list: T[]): T {
  return list[0];
}

export const Format = {
  number: (value: number) => new Intl.NumberFormat().format(value),
};
