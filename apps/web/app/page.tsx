import {
  BlockObjectResponse,
  NotionPreview,
  PartialBlockObjectResponse,
} from "notion-editor";
import { getChildrenBlocks, getNotionBlocks } from "../lib/utils/notion";

/* 
  참고:https://developers.notion.com/docs/working-with-page-content#modeling-content-as-blocks
  notion의 pageId를 사용합니다.
*/

const notionPageId = "370944a1-c6af-4727-9419-011b0a3a5ce2";

export default async function Home() {
  try {
    const initialBlocks: PartialBlockObjectResponse[] =
      await getNotionBlocks(notionPageId);
    const updatedBlocks: PartialBlockObjectResponse[] = await Promise.all(
      initialBlocks.map(async (block) => {
        const result = await getChildrenBlocks(block);
        return result;
      })
    );
    return <NotionPreview blocks={updatedBlocks as BlockObjectResponse[]} />;
  } catch (e: any) {
    console.error(e);
    return <div>error</div>;
  }
}
