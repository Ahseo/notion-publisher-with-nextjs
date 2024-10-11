import { useState } from "react";
import { ImageBlockObjectResponse } from "@editor/src/lib/types";
import { cn, preventEvent } from "@common-lib/utils";
import { NotionCaption } from "./NotionCaption";
import { DefaultBlockProps } from "./type";
import { theme } from "@editor/src/lib/theme";
import { getFileLink } from "@editor/src/lib/util";

type Props = {
  block: ImageBlockObjectResponse;
} & DefaultBlockProps;

export const NotionImage = ({ block }: Props) => {
  const { url } = getFileLink(block.image);

  return (
    <figure className={cn(theme.blockType.image)}>
      <img width="80%" src={url} alt={block.id} />
      {block.image.caption.length > 0 && (
        <NotionCaption captions={block.image.caption} />
      )}
    </figure>
  );
};
