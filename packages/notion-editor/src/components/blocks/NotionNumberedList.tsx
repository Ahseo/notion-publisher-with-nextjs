import {
  BulletedListItemBlockObjectResponse,
  NumberedListItemBlockObjectResponse,
} from "@editor/src/lib/types";
import { DefaultBlockProps } from "./type";
import { NotionRichText } from "./NotionRichText";
import { cn } from "@libs/utils";
import { getListStyle } from "@editor/src/lib/theme";
import { InitialBlock } from "./InitialBlock";

type Props = {
  block:
    | NumberedListItemBlockObjectResponse
    | BulletedListItemBlockObjectResponse;
  order?: number;
} & DefaultBlockProps;

export const NotionNumberedList = ({
  block,
  order,
  level,
  children,
}: Props) => {
  const element: "ol" | "ul" =
    block.type === "numbered_list_item" ? "ol" : "ul";
  const richTexts =
    block.type === "numbered_list_item"
      ? block.numbered_list_item.rich_text
      : block.bulleted_list_item.rich_text;

  return (
    <InitialBlock
      element={element}
      type={block.type}
      color={
        block.type === "numbered_list_item"
          ? block.numbered_list_item.color
          : block.bulleted_list_item.color
      }
      level={level}
      start={element == "ol" ? order : undefined}
      className={getListStyle(block.type, level)}
    >
      <li className={cn("pl-[0.2em]")}>
        <NotionRichText richTexts={richTexts} />
        {children}
      </li>
    </InitialBlock>
  );
};
