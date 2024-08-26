"use client";
import { useChatWindow } from "@/hooks/conversation/use-conversation";
import { Loader } from "../loader";
import Bubble from "../chatbot/bubble";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { PaperclipIcon } from "lucide-react";

const Messenger = () => {
  const {
    messageWindowRef,
    chats,
    loading,
    chatRoom,
    onHandleSentMessage,
    register,
  } = useChatWindow();
  return (
    <div className="relative flex h-0 flex-1 flex-col">
      <div className="flex h-0 w-full flex-1 flex-col">
        <Loader loading={loading}>
          <div
            ref={messageWindowRef}
            className="chat-window flex h-0 w-full flex-1 flex-col gap-3 overflow-y-auto py-5 pl-5"
          >
            {chats.length ? (
              chats.map((chat) => (
                <Bubble
                  key={chat.id}
                  message={{
                    role: chat.role!,
                    content: chat.message,
                  }}
                  createdAt={chat.createdAt}
                />
              ))
            ) : (
              <div>No Chat Selected</div>
            )}
          </div>
        </Loader>
      </div>
      <form
        onSubmit={onHandleSentMessage}
        className="flex w-full flex-col bg-muted px-3 pb-10 pt-3 backdrop-blur-sm"
      >
        <div className="flex justify-between">
          <Input
            {...register("content")}
            placeholder="Type your message..."
            className="flex-1 rounded-none border-none bg-muted p-0 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
          <Button type="submit" className="mt-3 px-7" disabled={!chatRoom}>
            Send
          </Button>
        </div>
        <span>
          <PaperclipIcon className="text-muted-foreground" />
        </span>
      </form>
    </div>
  );
};

export default Messenger;
