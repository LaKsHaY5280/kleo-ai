import { SIDE_BAR_MENU } from "@/assets/constants/menu";
import { LogOut, Menu, MonitorSmartphone } from "lucide-react";
import Image from "next/image";
import React from "react";
import DomainMenu from "./domain-menu";
import MenuItem from "./menu-item";

type Props = {
  onExpand(): void;
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

const MaxMenu = ({ current, domains, onExpand, onSignOut }: Props) => {
  return (
    <div className="flex h-full flex-col px-4 py-3">
      <div className="flex items-center justify-between">
        <Image
          src="/images/full_logo.png"
          alt="LOGO"
          sizes="100vw"
          className="animate-fade-in opacity-0 delay-300 fill-mode-forwards"
          style={{
            width: "50%",
            height: "auto",
          }}
          width={0}
          height={0}
        />
        <Menu
          className="animate-fade-in cursor-pointer opacity-0 delay-300 fill-mode-forwards"
          onClick={onExpand}
        />
      </div>
      <div className="flex h-full animate-fade-in flex-col justify-between pt-10 opacity-0 delay-300 fill-mode-forwards">
        <div className="flex flex-col">
          <p className="mb-3 text-xs text-gray-500">MENU</p>
          {SIDE_BAR_MENU.map((menu, key) => (
            <MenuItem size="max" {...menu} key={key} current={current} />
          ))}
          <DomainMenu domains={domains} />
        </div>
        <div className="flex flex-col">
          <p className="mb-3 text-xs text-gray-500">OPTIONS</p>
          <MenuItem
            size="max"
            label="Sign out"
            icon={<LogOut />}
            onSignOut={onSignOut}
          />
          {/* <MenuItem
            size="max"
            label="Mobile App"
            icon={<MonitorSmartphone />}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MaxMenu;
