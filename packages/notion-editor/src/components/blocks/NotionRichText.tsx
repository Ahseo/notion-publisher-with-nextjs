import { ReactNode } from "react";
import { RichTextItemResponse } from "@editor/src/lib/types";
import { cn, isEmptyOrSpace } from "@common-lib/utils";
import { theme } from "@editor/src/lib/theme";

const RichTextItem = ({ richText }: { richText: RichTextItemResponse }) => {
  const { type, text, annotations } = richText;

  if (type !== "text" || text.content.length <= 0) return <></>;
  // let children: string | ReactNode = text.content;
  let children: string | ReactNode = text.content;
  let className = "whitespace-pre-line";

  if (annotations.bold) {
    children = <strong>{children}</strong>;
  }

  if (annotations.italic) {
    children = <em>{children}</em>;
  }

  if (annotations.strikethrough) {
    children = <del>{children}</del>;
  }

  if (annotations.underline) {
    className = cn(className, theme.annotations.underline);
  }

  if (annotations.color != "default") {
    className = cn(className, theme.annotations.color[annotations.color]);
  }

  if (annotations.code) {
    children = <code className={theme.annotations.code}>{children}</code>;
  }

  if (text.link?.url) {
    children = (
      <a href={text.link.url} target="_blank">
        {children}
      </a>
    );
    className = cn(className, theme.typography.link);
  }

  if (isEmptyOrSpace(className)) return children;
  return <span className={className}>{children}</span>;
};

export const NotionRichText = ({
  richTexts,
}: {
  richTexts: Array<RichTextItemResponse>;
}) =>
  richTexts.map((richText, idx) => (
    <RichTextItem key={`${richText.plain_text}:${idx}`} richText={richText} />
  ));
