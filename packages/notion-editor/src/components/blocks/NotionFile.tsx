import { FileBlockObjectResponse } from "@editor/src/lib/types";
import { getFileLink } from "@editor/src/lib/util";
import { NotionCaption } from "./NotionCaption";
import { DefaultBlockProps } from "./type";
import { InitialBlock } from "./InitialBlock";
import { cn } from "@common-lib/utils";

type Props = {
  block: FileBlockObjectResponse;
} & DefaultBlockProps;

export const NotionFile = ({ block, level }: Props) => {
  const { originalFilename, href } = getFileLink(block.file);

  return (
    <InitialBlock type="file" element="div" level={level}>
      <a
        target="_blank"
        href={href}
        className={cn(
          "border-gray-6 bg-orange-light4 hover:bg-orange-light3 inline-flex gap-2 rounded-lg border px-[16px] py-[12px]"
        )}
      >
        다운로드:
        {originalFilename}
      </a>
      {block.file.caption.length > 0 && (
        <NotionCaption captions={block.file.caption} />
      )}
    </InitialBlock>
  );
};
