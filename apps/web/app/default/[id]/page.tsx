import { Suspense } from "react";
import NotionDataLoader from "./NotionDataLoader";

export default function FromNotion({ params }: { params: { id: string } }) {
  const pageId = params.id;

  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <NotionDataLoader pageId={pageId} />
    </Suspense>
  );
}
