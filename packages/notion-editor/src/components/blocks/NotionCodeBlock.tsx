import { CodeBlockObjectResponse } from "@editor/src/lib/types";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { DefaultBlockProps } from "./type";
import { cn } from "@common-lib/utils";

type Props = {
  block: CodeBlockObjectResponse;
} & DefaultBlockProps;

export const NotionCodeBlock = ({ block }: Props) => {
  const codeData = block.code.rich_text.map((t) => t.plain_text).join("");

  return (
    <section className={cn("relative mx-auto max-w-[768px] overflow-scroll")}>
      <header className="bg-green-brand flex max-w-[768px] items-center justify-between rounded-tl-xl rounded-tr-xl px-6 py-4">
        {/* Add Design */}
        <p color="white">코드 블럭</p>
      </header>
      <div className="bg-white rounded-bl-xl rounded-br-xl p-4">
        <pre className="language-javascript">
          <code>{codeData}</code>
        </pre>
        <CopyToClipboard text={codeData}>
          <button className="bg-green-brand text-white px-4 py-2 rounded-md mt-2">
            Copy
          </button>
        </CopyToClipboard>
      </div>
    </section>
  );
};
