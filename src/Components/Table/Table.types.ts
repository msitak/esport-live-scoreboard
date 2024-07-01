export interface TableProps {
  rows: Rows;
  headers: Headers[];
}

export type Rows = JSX.Element[][];

export type Align = "left" | "right" | "center";

export interface Headers {
  name?: string;
  align?: Align;
}
