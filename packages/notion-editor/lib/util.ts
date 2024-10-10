import { isEmptyOrSpace } from "@libs/utils";
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
  // 기존 supabase로 저장된 데이터가 있어서 여긴 수정 x
  const url =
    file.type === "file" ? file.file.supabase_url || "" : file.external.url;
  const originalUrl = file.type === "file" ? file.file.url : file.external.url;
  const originalFilename = getFilenameFromUrl(originalUrl);

  return {
    id,
    url,
    originalFilename,
    href: `/api/file/download?url=${url}&filename=${originalFilename}`,
  };
};
