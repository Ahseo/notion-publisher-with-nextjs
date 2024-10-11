import { isEmptyOrSpace } from "@common-lib/utils";
import { BlockFileObject, BlockObjectResponse } from "./types";

export const getFilenameFromUrl = (fileUrl: string) => {
  if (isEmptyOrSpace(fileUrl)) return;
  const parsedURL = new URL(fileUrl);
  const pathnameParts = parsedURL.pathname.split("/");
  const filename = pathnameParts[pathnameParts.length - 1];
  return filename ? decodeURIComponent(filename) : "";
};

export const getFavicon = (requestUrl: string, favicon: string) => {
  if (favicon.startsWith("http")) return favicon;

  const url = new URL(requestUrl);
  url.pathname = favicon;
  return url.toString();
};

export const serializeNotionData = (blocks?: BlockObjectResponse[]) =>
  blocks && JSON.stringify(blocks);

export const deserializeNotionData = (value: string) =>
  JSON.parse(value) as BlockObjectResponse[];

export const convertLanguageToOtherStyle = (language: string) => {
  switch (language) {
    case "arduino":
      return "c";
    case "micropython":
      return "python";
    default:
      return language;
  }
};

export const getFileLink = (file: BlockFileObject) => {
  const id = file.type === "file" ? file.file.id : "";
  const url = file.type === "file" ? file.file.url || "" : file.external.url;
  const originalFilename = getFilenameFromUrl(url);

  return {
    id,
    url,
    originalFilename,
    href: `/api/file/download?url=${url}&filename=${originalFilename}`,
  };
};
