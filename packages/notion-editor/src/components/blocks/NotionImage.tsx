import { useState } from "react";
import { ImageBlockObjectResponse } from "@editor/src/lib/types";
import Lightbox from "react-awesome-lightbox";
import { cn, preventEvent } from "@libs/utils";
import { NotionCaption } from "./NotionCaption";
import { DefaultBlockProps } from "./type";
import { theme } from "@editor/src/lib/theme";
import { getFileLink } from "@editor/src/lib/util";
import "react-awesome-lightbox/build/style.css";

type Props = {
  block: ImageBlockObjectResponse;
} & DefaultBlockProps;

export const NotionImage = ({ block }: Props) => {
  const [opened, setOpened] = useState<boolean>(false);
  const { url } = getFileLink(block.image);

  const handleModal = (e: any) => {
    preventEvent(e);
    setOpened(!opened);
  };

  return (
    <figure className={cn(theme.blockType.image)}>
      <img width="80%" src={url} alt={block.id} onDoubleClick={handleModal} />
      {block.image.caption.length > 0 && (
        <NotionCaption captions={block.image.caption} />
      )}
      {/* Lightbox */}
      {opened && <Lightbox image={url} title="" onClose={handleModal} />}
    </figure>
  );
};
