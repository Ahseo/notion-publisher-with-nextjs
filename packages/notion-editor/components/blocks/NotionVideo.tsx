import { VideoBlockObjectResponse } from "@editor/lib/types";
import ReactPlayer from "react-player";
import { NotionCaption } from "./NotionCaption";
import { DefaultBlockProps } from "./type";
import { InitialBlock } from "./InitialBlock";
import { getFileLink } from "@editor/lib/util";

type Props = {
  block: VideoBlockObjectResponse;
} & DefaultBlockProps;

export const NotionVideo = ({ block, level, children }: Props) => {
  const { url } = getFileLink(block.video);
  return (
    <InitialBlock element="figure" type="video" level={level}>
      <ReactPlayer url={url} width="100%" controls />
      {block.video.caption.length > 0 && (
        <NotionCaption captions={block.video.caption} />
      )}
      {children}
    </InitialBlock>
  );
};
