import {
  BlockObjectResponse,
  NotionPreview,
  PartialBlockObjectResponse,
} from "notion-editor";
import { getChildrenBlocks, getNotionBlocks } from "../../lib/utils/notion";

/* 
  참고:https://developers.notion.com/docs/working-with-page-content#modeling-content-as-blocks
  notion의 pageId를 사용합니다.
*/

export default async function FromNotion({
  params,
}: {
  params: { id: string };
}) {
  const pageId = params.id;
  try {
    const initialBlocks: PartialBlockObjectResponse[] = await getNotionBlocks(
      pageId,
      pageId
    );
    const updatedBlocks: PartialBlockObjectResponse[] = await Promise.all(
      initialBlocks.map(async (block) => {
        const result = await getChildrenBlocks(pageId, block);
        return result;
      })
    );
    return <NotionPreview blocks={updatedBlocks as BlockObjectResponse[]} />;
  } catch (e: any) {
    console.error(e);
    return <div>error</div>;
  }
}
