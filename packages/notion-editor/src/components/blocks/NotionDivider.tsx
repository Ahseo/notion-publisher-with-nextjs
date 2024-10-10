import { DividerBlockObjectResponse } from "@editor/src/lib/types";
import { DefaultBlockProps } from "./type";
import { InitialBlock } from "./InitialBlock";

type Props = {
  block: DividerBlockObjectResponse;
} & DefaultBlockProps;

export const NotionDivider = ({ block, level }: Props) => {
  return <InitialBlock element="hr" type="divider" level={level} />;
};
