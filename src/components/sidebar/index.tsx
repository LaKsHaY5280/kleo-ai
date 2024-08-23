"use client";
import useSideBar from "@/context/use-sidebar";
import { cn } from "@/lib/utils";
import React from "react";
import MaxMenu from "./maximized-menu";
import { MinMenu } from "./minimized-menu";

type Props = {
  domains:
    | {
        id: string;
        name: string;
        icon: string;
      }[]
    | null
    | undefined;
};

const SideBar = ({ domains }: Props) => {
  const { expand, onExpand, page, onSignOut } = useSideBar();

  return (
    <div
      className={cn(
        "fixed h-full w-[60px] bg-cream fill-mode-forwards dark:bg-neutral-950 md:relative",
        expand == undefined && "",
        expand == true
          ? "animate-open-sidebar"
          : expand == false && "animate-close-sidebar",
      )}
    >
      {expand ? (
        <MaxMenu
          domains={domains}
          current={page!}
          onExpand={onExpand}
          onSignOut={onSignOut}
        />
      ) : (
        <MinMenu
          domains={domains}
          onShrink={onExpand}
          current={page!}
          onSignOut={onSignOut}
        />
      )}
    </div>
  );
};

export default SideBar;
