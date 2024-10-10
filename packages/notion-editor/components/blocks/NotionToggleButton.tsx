import { preventEvent } from "@libs/utils";
import React, { ReactNode, useState } from "react";

interface Props {
  component: {
    parent: ReactNode;
    child: ReactNode;
  };
}

export const NotionToggleButton = ({ component: { parent, child } }: Props) => {
  const [opened, setOpened] = useState<boolean>();

  const handleOpen = (e: React.ChangeEvent<any>) => {
    preventEvent(e);
    setOpened(!opened);
  };

  return (
    <div className="flex">
      <div className="shrink-0 grow-0 basis-[1.5em]">
        <button
          className="flex items-center justify-center w-full h-full"
          onClick={handleOpen}
        >
          {opened ? "-" : "+"}
        </button>
      </div>
      <div className="flex-1">
        {parent}
        {opened && child}
      </div>
    </div>
  );
};
