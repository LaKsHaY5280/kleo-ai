"use client";
import { useThemeMode } from "@/hooks/settings/use-settings";
import React from "react";
import Section from "../section-label";
import { cn } from "@/lib/utils";
import { SystemMode } from "../themes-placeholder/systemmode";
import { LightMode } from "../themes-placeholder/lightmode";
import { DarkMode } from "../themes-placeholder/darkmode";

const DarkModetoggle = () => {
  const { setTheme, theme } = useThemeMode();

  return (
    <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
      <div className="lg:col-span-1">
        <Section
          label="Interface Theme"
          message="Select or customize your UI theme "
        />
      </div>
      <div className="flex flex-col items-start gap-5 lg:col-span-4 lg:flex-row">
        <div
          className={cn(
            "cursor-pointer overflow-hidden rounded-2xl border-4 border-transparent",
            theme == "system" && "border-orange",
          )}
          onClick={() => setTheme("system")}
        >
          <SystemMode />
        </div>
        <div
          className={cn(
            "cursor-pointer overflow-hidden rounded-2xl border-4 border-transparent",
            theme == "light" && "border-orange",
          )}
          onClick={() => setTheme("light")}
        >
          <LightMode />
        </div>
        <div
          className={cn(
            "cursor-pointer overflow-hidden rounded-2xl border-4 border-transparent",
            theme == "dark" && "border-orange",
          )}
          onClick={() => setTheme("dark")}
        >
          <DarkMode />
        </div>
      </div>
    </div>
  );
};

export default DarkModetoggle;
