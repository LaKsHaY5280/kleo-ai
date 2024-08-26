import { ChatBotMessageProps } from "@/lib/schemas/conversation.schema";
import React, { forwardRef } from "react";
import { UseFormRegister } from "react-hook-form";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import RealTimeMode from "./real-time";
import Image from "next/image";
import TabsMenu from "../tabs/intex";
import { BOT_TABS_MENU } from "@/assets/constants/menu";
import { TabsContent } from "../ui/tabs";
import { Separator } from "../ui/separator";
import Bubble from "./bubble";
import { Responding } from "./responding";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Paperclip, Send } from "lucide-react";
import { Label } from "../ui/label";
import { CardDescription, CardTitle } from "../ui/card";
import Accordion from "../accordian";

type Props = {
  errors: any;
  register: UseFormRegister<ChatBotMessageProps>;
  chats: { role: "assistant" | "user"; content: string; link?: string }[];
  onChat(): void;
  onResponding: boolean;
  domainName: string;
  theme?: string | null;
  textColor?: string | null;
  help?: boolean;
  realtimeMode:
    | {
        chatroom: string;
        mode: boolean;
      }
    | undefined;
  helpdesk: {
    id: string;
    question: string;
    answer: string;
    domainId: string | null;
  }[];
  setChat: React.Dispatch<
    React.SetStateAction<
      {
        role: "user" | "assistant";
        content: string;
        link?: string | undefined;
      }[]
    >
  >;
};

export const BotWindow = forwardRef<HTMLDivElement, Props>(
  (
    {
      errors,
      register,
      chats,
      onChat,
      onResponding,
      domainName,
      helpdesk,
      realtimeMode,
      setChat,
      textColor,
      theme,
      help,
    },
    ref,
  ) => {
    console.log(errors);
    return (
      <div className="mr-[80px] flex h-[670px] w-[450px] flex-col overflow-hidden rounded-xl border-[1px] bg-white">
        <div className="flex justify-between px-4 pt-4">
          <div className="flex gap-2">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-start">
              <h3 className="text-lg font-bold leading-none">
                Sales Rep - Web Prodigies
              </h3>
              <p className="text-sm">{domainName.split(".com")[0]}</p>
              {realtimeMode?.mode && (
                <RealTimeMode
                  setChats={setChat}
                  chatRoomId={realtimeMode.chatroom}
                />
              )}
            </div>
          </div>
          <div className="relative h-16 w-16">
            <Image
              src="https://ucarecdn.com/019dd17d-b69b-4dea-a16b-60e0f25de1e9/propuser.png"
              fill
              alt="users"
              objectFit="contain"
            />
          </div>
        </div>
        <TabsMenu
          triggers={BOT_TABS_MENU}
          className="m-2 border-[1px] border-border bg-transparent"
        >
          <TabsContent value="chat">
            <Separator orientation="horizontal" />
            <div className="flex h-full flex-col">
              <div
                style={{
                  background: theme || "",
                  color: textColor || "",
                }}
                className="chat-window flex h-[400px] flex-col gap-3 overflow-y-auto px-3 py-5"
                ref={ref}
              >
                {chats.map((chat, key) => (
                  <Bubble key={key} message={chat} />
                ))}
                {onResponding && <Responding />}
              </div>
              <form
                onSubmit={onChat}
                className="flex flex-1 flex-col bg-porcelain px-3 py-1"
              >
                <div className="flex justify-between">
                  <Input
                    {...register("content")}
                    placeholder="Type your message..."
                    className="flex-1 rounded-none border-none bg-porcelain p-0 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
                  />
                  <Button type="submit" className="mt-3">
                    <Send />
                  </Button>
                </div>
                <Label htmlFor="bot-image">
                  <Paperclip />
                  <Input
                    {...register("image")}
                    type="file"
                    id="bot-image"
                    className="hidden"
                  />
                </Label>
              </form>
            </div>
          </TabsContent>

          <TabsContent value="helpdesk">
            <div className="flex h-[485px] flex-col gap-4 overflow-y-auto overflow-x-hidden p-4">
              <div>
                <CardTitle>Help Desk</CardTitle>
                <CardDescription>
                  Browse from a list of questions people usually ask.
                </CardDescription>
              </div>
              <Separator orientation="horizontal" />

              {helpdesk.map((desk) => (
                <Accordion
                  key={desk.id}
                  trigger={desk.question}
                  content={desk.answer}
                />
              ))}
            </div>
          </TabsContent>
        </TabsMenu>
        <div className="flex justify-center">
          <p className="text-xs text-gray-400">Powered By Web Prodigies</p>
        </div>
      </div>
    );
  },
);

BotWindow.displayName = "BotWindow";
