import { theme } from "@editor/src/lib/theme";
import { RichTextItemResponse } from "@editor/src/lib/types";
import { NotionRichText } from "./NotionRichText";
import { cn } from "@libs/utils";

interface Props {
  captions: RichTextItemResponse[];
}

export const NotionCaption = ({ captions }: Props) => {
  return (
    <figcaption className={cn(theme.typography.caption)}>
      <NotionRichText richTexts={captions} />
    </figcaption>
  );
};
