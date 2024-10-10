import axios from "axios";
import { cn } from "libs";
import {
  BlockObjectResponse,
  NotionPreview,
  PartialBlockObjectResponse,
} from "notion-editor";

/* 
  참고:https://developers.notion.com/docs/working-with-page-content#modeling-content-as-blocks
  notion의 pageId를 사용합니다.
*/
const notionPageId = "";
/* 
  참고:https://developers.notion.com/docs/authorization#internal-integration-auth-flow-set-up
  notion의 Integration setting을 진행한 후 발급받은 token을 사용합니다.
*/
const notionIntegrationToken = "";

export default async function Home() {
  const getNotionBlocks = async (blockId: string) => {
    const config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `https://api.notion.com/v1/blocks/${blockId}/children?page_size=100`,
      headers: {
        "Notion-Version": "2022-02-22",
        Authorization: notionIntegrationToken,
      },
    };
    try {
      const blockResponse = await axios(config);
      return blockResponse.data.results;
    } catch (e: any) {
      console.error(e);
      return [];
    }
  };

  // Children block을 재귀적으로 가져오는 함수
  const getChildrenBlocks = async (block: PartialBlockObjectResponse) => {
    const initialBlocks: PartialBlockObjectResponse[] = await getNotionBlocks(
      block.id
    );
    const childrenBlocks: PartialBlockObjectResponse[] = await Promise.all(
      initialBlocks.map(async (childBlock) => {
        const result = await getChildrenBlocks(childBlock);
        return result;
      })
    );
    const updatedBlock: PartialBlockObjectResponse = {
      ...block,
      children: childrenBlocks as BlockObjectResponse[],
    };
    return updatedBlock;
  };

  try {
    const initialBlocks: PartialBlockObjectResponse[] =
      await getNotionBlocks(notionPageId);
    const updatedBlocks: PartialBlockObjectResponse[] = await Promise.all(
      initialBlocks.map(async (block) => {
        const result = await getChildrenBlocks(block);
        return result;
      })
    );
    return (
      <div className={cn("w-[800px] mx-auto py-4")}>
        <NotionPreview blocks={updatedBlocks} />
      </div>
    );
  } catch (e: any) {
    console.error(e);
    return <div>error</div>;
  }
}
