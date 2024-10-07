"use client";
import { useAuthContextHook } from "@/context/use-auth-context";
import { cn } from "@/lib/utils";
import React from "react";

const HighLightBar = () => {
  const { currentStep } = useAuthContextHook();

  return (
    <div className="grid grid-cols-3 gap-3">
      <div
        className={cn(
          "col-span-1 h-2 rounded-full",
          currentStep == 1 ? "bg-stone-700" : "bg-platinum",
        )}
      ></div>
      <div
        className={cn(
          "col-span-1 h-2 rounded-full",
          currentStep == 2 ? "bg-stone-700" : "bg-platinum",
        )}
      ></div>
      <div
        className={cn(
          "col-span-1 h-2 rounded-full",
          currentStep == 3 ? "bg-stone-700" : "bg-platinum",
        )}
      ></div>
    </div>
  );
};

export default HighLightBar;
