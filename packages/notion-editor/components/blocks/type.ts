import { ReactNode } from "react";
import { BlockObjectResponse } from "@editor/lib/types";

export type DefaultBlockProps = {
  key: string;
  block: BlockObjectResponse;
  level: number;
  children?: ReactNode[] | null;
};
