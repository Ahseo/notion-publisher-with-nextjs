"use server";

import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const tag = body?.tag;
    // 여기서 notion 관련 태그를 재검증
    revalidateTag("notion-" + tag);

    return new Response("Revalidation 성공", { status: 200 });
  } catch (error) {
    return new Response("Revalidation 실패", { status: 500 });
  }
}
