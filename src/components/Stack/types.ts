import { ReactNode } from "react";

export type ActualStackType = Record<
  string,
  { SVG: ReactNode; text: string; link: string }
>;
