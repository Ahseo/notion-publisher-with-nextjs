import { ParagraphBlockObjectResponse } from "@editor/src/lib/types";
import { NotionRichText } from "./NotionRichText";
import { DefaultBlockProps } from "./type";
import { InitialBlock } from "./InitialBlock";

type Props = {
  block: ParagraphBlockObjectResponse;
} & DefaultBlockProps;

export const NotionParagraph = ({ block, children, ...props }: Props) => {
  if (block.paragraph.rich_text.length === 0) return <br />;
  const element = children ? "div" : "p";
  return (
    <InitialBlock
      element={element}
      type="paragraph"
      color={block.paragraph.color}
      {...props}
    >
      <NotionRichText richTexts={block.paragraph.rich_text} />
      {children}
    </InitialBlock>
  );
};
