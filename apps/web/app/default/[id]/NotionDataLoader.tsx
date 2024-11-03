import { BlockObjectResponse, NotionPreview } from "@editor/src";
import { getNotionData } from "lib/utils/notion";

// Notion 데이터를 비동기로 불러와서 렌더링하는 컴포넌트
async function NotionDataLoader({ pageId }: { pageId: string }) {
  try {
    const blocks = await getNotionData(pageId);
    return <NotionPreview blocks={blocks as BlockObjectResponse[]} />;
  } catch (e: any) {
    console.error(e);
    return <div>오류 발생</div>;
  }
}

export default NotionDataLoader;
