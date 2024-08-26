"use client";
import { useChatBot } from "@/hooks/chatbot/use-chatbot";
import React from "react";
import { BotWindow } from "./window";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { BotIcon } from "@/assets/icons/bot-icon";

const AiChatBot = () => {
  const {
    onOpenChatBot,
    botOpened,
    onChats,
    register,
    onStartChatting,
    onAiTyping,
    messageWindowRef,
    currentBot,
    loading,
    onRealTime,
    setOnChats,
    errors,
  } = useChatBot();

  return (
    <div className="flex h-screen flex-col items-end justify-end gap-4">
      {botOpened && (
        <BotWindow
          errors={errors}
          setChat={setOnChats}
          realtimeMode={onRealTime}
          helpdesk={currentBot?.helpdesk!}
          domainName={currentBot?.name!}
          ref={messageWindowRef}
          help={currentBot?.chatBot?.helpdesk}
          theme={currentBot?.chatBot?.background}
          textColor={currentBot?.chatBot?.textColor}
          chats={onChats}
          register={register}
          onChat={onStartChatting}
          onResponding={onAiTyping}
        />
      )}
      <div
        className={cn(
          "relative flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-grandis shadow-md",
          loading ? "invisible" : "visible",
        )}
        onClick={onOpenChatBot}
      >
        {currentBot?.chatBot?.icon ? (
          <Image
            src={`https://ucarecdn.com/${currentBot.chatBot.icon}/`}
            alt="bot"
            fill
          />
        ) : (
          <BotIcon />
        )}
      </div>
    </div>
  );
};

export default AiChatBot;
