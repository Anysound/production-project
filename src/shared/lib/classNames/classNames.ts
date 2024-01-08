type Modes = Record<string, boolean | string>;

const obj = {};

export function classNames(
  cls: string,
  modes: Modes,
  additional: string[]
): string {
  return [
    cls,
    ...additional,
    Object.entries(modes).filter(([cls, value]) => Boolean(value)).map((([cls]) => cls))
  ].join(" ");
}
