import { getLinkPreviewData } from "@editor/api";
import { BookmarkBlockObjectResponse } from "@editor/lib/types";
import { OgResultObject } from "@editor/lib/types/og";
import { useEffect, useState } from "react";
import { DefaultBlockProps } from "./type";
import { InitialBlock } from "./InitialBlock";
import { cn } from "@libs/utils";

type Props = {
  block: BookmarkBlockObjectResponse;
} & DefaultBlockProps;

export const NotionBookmark = ({ block, level, children }: Props) => {
  const [ogs, setOgs] = useState<OgResultObject | null>(null);

  useEffect(() => {
    async function getData(url: string) {
      try {
        const data = await getLinkPreviewData(url);
        setOgs(data);
      } catch (e) {
        // Failed to load link preview
      }
    }

    getData(block.bookmark.url);
  }, [block]);

  if (!ogs || !ogs.url) return <></>;
  return (
    <InitialBlock element="figure" type="bookmark" level={level}>
      <a href={ogs.url} target="_blank" className={cn("flex")}>
        <div
          className={cn(
            "min-w-[50%] flex-1",
            "px-[14px] pb-[12px] pt-[12px]",
            "flex flex-col gap-[0.2em]"
          )}
        >
          <div
            className={cn(
              "overflow-hidden truncate whitespace-nowrap text-[0.85em]"
            )}
          >
            {ogs.title}
          </div>
          <div
            className={cn(
              "line-clamp-3 flex-1 overflow-hidden break-words text-[0.75em]"
            )}
          >
            {ogs.description}
          </div>
          <div className={cn("mt-[0.5em] flex items-center")}>
            {ogs.favicon && (
              <img
                src={ogs.favicon}
                className={cn(
                  "mr-[0.5em] inline-block max-h-[1.2em] max-w-[1.2em]",
                  "rounded-[3px] align-text-bottom"
                )}
              />
            )}
            <span
              className={cn(
                "mt-[0.25em] overflow-hidden truncate whitespace-nowrap text-[0.75em]"
              )}
            >
              {ogs.url}
            </span>
          </div>
        </div>
        {ogs.imageUrl && (
          <img
            src={ogs.imageUrl}
            className={cn("max-w-[180px] object-cover")}
          />
        )}
      </a>
    </InitialBlock>
  );
};
