import {
  Heading1BlockObjectResponse,
  Heading2BlockObjectResponse,
  Heading3BlockObjectResponse,
} from "@editor/lib/types";
import { NotionRichText } from "./NotionRichText";
import { NotionToggleButton } from "./NotionToggleButton";
import { DefaultBlockProps } from "./type";
import { InitialBlock } from "./InitialBlock";

type Props = {
  block:
    | Heading1BlockObjectResponse
    | Heading2BlockObjectResponse
    | Heading3BlockObjectResponse;
} & DefaultBlockProps;

export const NotionHeading = ({ block, children, level }: Props) => {
  const { element, color, rich_text, is_toggleable } =
    block.type === "heading_1"
      ? { element: "h1", ...block.heading_1 }
      : block.type === "heading_2"
        ? { element: "h2", ...block.heading_2 }
        : { element: "h3", ...block.heading_3 };

  const renderParent = () => {
    return <NotionRichText richTexts={rich_text} />;
  };

  return (
    <InitialBlock
      type={block.type}
      element={element as keyof JSX.IntrinsicElements}
      color={color}
      level={level}
    >
      {is_toggleable ? (
        <NotionToggleButton
          component={{ parent: renderParent(), child: children }}
        />
      ) : (
        <>
          {renderParent()}
          {children}
        </>
      )}
    </InitialBlock>
  );
};
