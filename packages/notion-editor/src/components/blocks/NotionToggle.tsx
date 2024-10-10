import { ToggleBlockObjectResponse } from "@editor/src/lib/types";
import { NotionRichText } from "./NotionRichText";
import { theme } from "@editor/src/lib/theme";
import { NotionPreview } from "../NotionPreview";
import { cn } from "@libs/utils";
import { NotionToggleButton } from "./NotionToggleButton";
import { DefaultBlockProps } from "./type";
import { InitialBlock } from "./InitialBlock";

type Props = {
  block: ToggleBlockObjectResponse;
} & DefaultBlockProps;

export const NotionToggle = ({ block, children, level }: Props) => {
  return (
    <InitialBlock
      element="div"
      type="toggle"
      color={block.toggle.color}
      level={level}
    >
      <NotionToggleButton
        component={{
          parent: <NotionRichText richTexts={block.toggle.rich_text} />,
          child: children,
        }}
      />
    </InitialBlock>
  );
};
