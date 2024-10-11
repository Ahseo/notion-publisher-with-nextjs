"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RevalidatePage() {
  const [id, setId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRevalidate = async () => {
    setMessage("Revalidating...");
    setLoading(true);

    const response = await fetch("/revalidate-action", {
      method: "POST",
    });

    if (response.ok) {
      setMessage("Revalidation 성공!");
      router.replace("/" + id);
    } else {
      setMessage("Revalidation 실패!");
    }
    setLoading(false);
  };

  return (
    <div>
      <h1>Revalidate Notion Page</h1>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="Notion Page ID"
      />
      <br />
      <button
        disabled={!id && !loading}
        className="bg-green-brand text-white px-4 py-2 rounded"
        onClick={handleRevalidate}
      >
        노션 컨텐츠가 변경되었으면 버튼 클릭을 통해 갱신해주세요.
      </button>
      {message && <p>{message}</p>}
    </div>
  );
}
