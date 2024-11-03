import { BlockObjectResponse, NotionPreview } from "@editor/src";
import { getNotionData } from "lib/utils/notion";

// ISR을 사용하여 빌드 타임에 페이지를 생성할 경로를 설정
export async function generateStaticParams() {
  // TODO: id업데이트 혹은 데이터 가져와서 생성할 페이지의 id 목록을 반환
  const pageIds = ["test"]; // 정적으로 생성할 페이지의 id 목록
  return pageIds.map((id) => ({ id }));
}

// ISR 적용: 60초마다 페이지를 재생성 (ISR 활성화)
export const revalidate = 60;

export default async function FromNotion({
  params,
}: {
  params: { id: string };
}) {
  const pageId = params.id;

  try {
    const blocks = await getNotionData(pageId);
    return <NotionPreview blocks={blocks as BlockObjectResponse[]} />;
  } catch (e: any) {
    console.error(e);
    return <div>오류 발생</div>;
  }
}
