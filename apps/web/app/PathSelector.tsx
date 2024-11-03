"use client"; // 클라이언트 컴포넌트로 지정

import { useState } from "react";
import Link from "next/link";

export default function PathSelector() {
  const [id, setId] = useState("");
  const [pathType, setPathType] = useState<"default" | "isr">("default");

  const handlePathSelection = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setPathType(event.target.value as "default" | "isr");
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.target.value);
  };

  return (
    <div>
      {/* id 입력 필드 */}
      <input
        type="text"
        placeholder="Enter ID"
        value={id}
        onChange={handleInputChange}
      />
      <br />
      {/* 경로 선택 필드 */}
      <select value={pathType} onChange={handlePathSelection}>
        <option value="default">Default</option>
        <option value="isr">ISR</option>
      </select>

      {/* 선택한 경로로 이동 */}
      <br />
      <Link href={`/${pathType}/${id}`}>
        <button disabled={!id}>Go to {pathType} page</button>
      </Link>
    </div>
  );
}
