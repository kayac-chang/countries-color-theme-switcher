export function toJSON(res: Response) {
  return res.json();
}

export function URL(
  base: string | URL,
  search: Record<string, string | string[]>
) {
  const url = new globalThis.URL(base);

  for (const [key, value] of Object.entries(search)) {
    if (Array.isArray(value)) {
      url.searchParams.append(key, value.join(","));

      continue;
    }

    url.searchParams.append(key, value);
  }

  return String(url);
}
