import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { id, type } = body;
    if (type === "isr") {
      revalidatePath(`/isr/${id}`);
      return;
    }
    revalidatePath(`/default/${id}`);

    return new Response("Revalidation 성공", { status: 200 });
  } catch (error) {
    return new Response("Revalidation 실패", { status: 500 });
  }
}
