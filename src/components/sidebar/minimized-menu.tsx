import { SIDE_BAR_MENU } from "@/assets/constants/menu";

import React from "react";

import { LogOut, MonitorSmartphone } from "lucide-react";
import MenuItem from "./menu-item";
import DomainMenu from "./domain-menu";
import Image from "next/image";

type MinMenuProps = {
  onShrink(): void;
  current: string;
  onSignOut(): void;
  domains:
    | {
        id: string;
        name: string;
        icon: string | null;
      }[]
    | null
    | undefined;
};

export const MinMenu = ({
  onShrink,
  current,
  onSignOut,
  domains,
}: MinMenuProps) => {
  return (
    <div className="flex h-full flex-col items-center p-3">
      <span className="animate-fade-in cursor-pointer opacity-0 delay-300 fill-mode-forwards">
        <Image
          src="/images/knbg.png"
          alt="logo"
          width={100}
          height={100}
          className="h-10 w-10"
          onClick={() => {
            onShrink();
          }}
        />
      </span>
      <div className="flex h-full animate-fade-in flex-col justify-between pt-10 opacity-0 delay-300 fill-mode-forwards">
        <div className="flex flex-col">
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem size="min" {...menu} key={key} current={current} />
          ))}
          <DomainMenu min domains={domains} />
        </div>
        <div className="flex flex-col">
          <MenuItem
            size="min"
            label="Sign out"
            icon={<LogOut />}
            onSignOut={onSignOut}
          />
          {/* <MenuItem
            size="min"
            label="Mobile App"
            icon={<MonitorSmartphone />}
          /> */}
        </div>
      </div>
    </div>
  );
};
