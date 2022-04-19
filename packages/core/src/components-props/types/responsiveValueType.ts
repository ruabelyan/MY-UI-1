export type ResponsiveValueType<T> =
  | T
  | { xs?: T; sm?: T; md?: T; lg?: T; xlg?: T };
