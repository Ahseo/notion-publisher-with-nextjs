import { BlockObjectResponse, PartialBlockObjectResponse } from "notion-editor";

/* 
  참고:https://developers.notion.com/docs/authorization#internal-integration-auth-flow-set-up
  notion의 Integration setting을 진행한 후 발급받은 token을 사용합니다.
*/
const notionIntegrationToken = "Bearer " + process.env.NOTION_INTEGRATION_TOKEN;

export const getNotionBlocks = async (pageId: string, blockId: string) => {
  const config = {
    method: "GET",
    headers: {
      "Notion-Version": "2022-02-22",
      Authorization: notionIntegrationToken,
    },
    // revalidate tag
    next: {
      tags: ["notion-" + pageId],
    },
  };

  const blockResponse = await fetch(
    `https://api.notion.com/v1/blocks/${blockId}/children?page_size=100`,
    config
  );
  if (!blockResponse.ok) {
    throw new Error(`Error: ${blockResponse.statusText}`);
  }

  const data = await blockResponse.json();
  return data.results;
};

export const getChildrenBlocks = async (
  pageId: string,
  block: PartialBlockObjectResponse
) => {
  const initialBlocks: PartialBlockObjectResponse[] = await getNotionBlocks(
    pageId,
    block.id
  );
  const childrenBlocks: PartialBlockObjectResponse[] = await Promise.all(
    initialBlocks.map(async (childBlock) => {
      const result = await getChildrenBlocks(pageId, childBlock);
      return result;
    })
  );
  const updatedBlock: PartialBlockObjectResponse = {
    ...block,
    children: childrenBlocks as BlockObjectResponse[],
  };
  return updatedBlock;
};
