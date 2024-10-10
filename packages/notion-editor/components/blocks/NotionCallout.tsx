import { DefaultBlockProps } from "./type";
import { CalloutBlockObjectResponse } from "@editor/lib/types";
import { NotionRichText } from "./NotionRichText";
import { InitialBlock } from "./InitialBlock";

type Props = {
  block: CalloutBlockObjectResponse;
} & DefaultBlockProps;

export const NotionCallout = ({ block, children, level }: Props) => {
  const renderIcon = () => {
    const icon = block.callout.icon;
    if (!icon) return;
    if (icon.type === "emoji") return icon.emoji;

    const url = icon.type === "external" ? icon.external.url : icon.file.url;
    return <img src={url} />;
  };

  return (
    <InitialBlock
      element="figure"
      type="callout"
      color={block.callout.color}
      level={level}
      className={
        !block.callout.color.includes("background")
          ? `border-notion-background-gray border`
          : ""
      }
    >
      <div className="shrink-0 grow-0 basis-[24px]">{renderIcon()}</div>
      <div className="flex-1 overflow-hidden">
        <NotionRichText richTexts={block.callout.rich_text} />
        {children}
      </div>
    </InitialBlock>
  );
};
