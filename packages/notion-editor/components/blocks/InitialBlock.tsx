import { ReactNode } from "react";
import { cn } from "@libs/utils";
import { ApiColor, BlockType } from "@editor/lib/types";
import { getIndentation, theme } from "@editor/lib/theme";

type Props = {
  element: keyof JSX.IntrinsicElements;
  color?: ApiColor;
  className?: string;
  type: BlockType;
  level: number;
  children?: ReactNode | ReactNode[];
  start?: number;
  style?: React.CSSProperties;
};

export const InitialBlock = ({
  element: Element,
  type,
  color,
  level,
  className,
  ...props
}: Props) => {
  return (
    <Element
      className={cn(
        theme.blockType[type],
        theme.annotations.color[color ?? "default"],
        getIndentation(level),
        className
      )}
      {...props}
    />
  );
};
