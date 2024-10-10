import { DefaultBlockProps } from "./type";
import { QuoteBlockObjectResponse } from "@editor/lib/types";
import { NotionRichText } from "./NotionRichText";
import { InitialBlock } from "./InitialBlock";

type Props = {
  block: QuoteBlockObjectResponse;
} & DefaultBlockProps;

export const NotionQuote = ({ block, children, level }: Props) => {
  return (
    <InitialBlock
      element="blockquote"
      type="quote"
      color={block.quote.color}
      level={level}
    >
      <NotionRichText richTexts={block.quote.rich_text} />
      {children}
    </InitialBlock>
  );
};
