"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RevalidatePage() {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRevalidate = async () => {
    setMessage("Revalidating...");

    const response = await fetch("/revalidate-action", {
      method: "POST",
    });

    if (response.ok) {
      setMessage("Revalidation 성공!");
      router.replace("/");
    } else {
      setMessage("Revalidation 실패!");
    }
  };

  return (
    <div>
      <h1>Revalidate Notion Page</h1>
      <button
        className="bg-green-brand text-white px-4 py-2 rounded"
        onClick={handleRevalidate}
      >
        노션 컨텐츠가 변경되었으면 버튼 클릭을 통해 갱신해주세요.
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
