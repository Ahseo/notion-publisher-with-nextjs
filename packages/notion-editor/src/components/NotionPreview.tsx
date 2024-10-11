"use client";

import { ReactNode } from "react";
import { BlockObjectResponse } from "@editor/src/lib/types";
import {
  NotionParagraph,
  NotionHeading,
  NotionVideo,
  NotionImage,
  NotionCodeBlock,
  NotionBookmark,
  NotionToggle,
  NotionFile,
  NotionNumberedList,
  NotionDivider,
  NotionQuote,
  NotionCallout,
} from "./blocks";
import Twemoji from "react-twemoji";
import { DefaultBlockProps } from "./blocks/type";

interface Props {
  loading?: boolean;
  blocks: BlockObjectResponse[];
}

export const NotionPreview = ({ loading = false, blocks }: Props) => {
  const renderBlocks = (
    blockList: BlockObjectResponse[],
    parentLevel = 0,
    countLevel = 0
  ) => {
    const result: ReactNode[] = [];
    let order = 0;
    let children: ReactNode[] | null = [];

    blockList.map((block, idx) => {
      const key = `${block.id}:${block.type}:${idx}`;
      if (
        block.type == "numbered_list_item" &&
        block.children &&
        block.children.length > 0
      ) {
        children = renderBlocks(
          block.children,
          parentLevel + 1,
          countLevel + 1
        );
      } else {
        children =
          block.children && block.children.length > 0
            ? // 재귀적으로 자식 블록을 렌더링합니다.
              renderBlocks(block.children, parentLevel + 1)
            : null;
      }

      if (block.type != "numbered_list_item" && order != 0) order = 0;
      const props: Omit<Omit<DefaultBlockProps, "block">, "key"> = {
        level: parentLevel,
        children,
      };

      switch (block.type) {
        case "paragraph":
          result.push(<NotionParagraph key={key} block={block} {...props} />);
          break;
        case "image":
          result.push(<NotionImage key={key} block={block} {...props} />);
          break;
        case "video":
          result.push(<NotionVideo key={key} block={block} {...props} />);
          break;
        case "code":
          result.push(<NotionCodeBlock key={key} block={block} {...props} />);
          break;
        case "heading_1":
        case "heading_2":
        case "heading_3":
          result.push(
            <NotionHeading
              key={key}
              {...props}
              block={block}
              level={parentLevel - 1}
            />
          );
          break;
        case "numbered_list_item":
          order += 1;
          result.push(
            <NotionNumberedList
              key={key}
              {...props}
              order={order}
              block={block}
              level={countLevel}
            />
          );
          break;
        case "bulleted_list_item":
          result.push(
            <NotionNumberedList key={key} block={block} {...props} />
          );
          break;
        case "bookmark":
          result.push(<NotionBookmark key={key} block={block} {...props} />);
          break;
        case "file":
          result.push(<NotionFile key={key} block={block} {...props} />);
          break;
        case "toggle":
          result.push(<NotionToggle key={key} block={block} {...props} />);
          break;
        case "divider":
          result.push(<NotionDivider key={key} block={block} {...props} />);
          break;
        case "quote":
          result.push(<NotionQuote key={key} block={block} {...props} />);
          break;
        case "callout":
          result.push(<NotionCallout key={key} block={block} {...props} />);
        default:
          break;
      }
    });
    return result;
  };

  if (loading) return <div>loading...</div>;
  return (
    <Twemoji options={{ className: "editor-emoji" }}>
      <article>{renderBlocks(blocks)}</article>
    </Twemoji>
  );
};
