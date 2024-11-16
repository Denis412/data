export type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};

export type VueClasses =
  | string
  | Record<string, boolean>
  | Array<Record<string, boolean> | string>;

export type { UnsafeHtmlSymbol } from '../helpers';
