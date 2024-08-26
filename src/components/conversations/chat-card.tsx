"use client";
import { useChatTime } from "@/hooks/conversation/use-conversation";
import { Card, CardContent, CardDescription } from "../ui/card";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { User } from "lucide-react";
import { UrgentIcon } from "@/assets/icons/urgent-icon";

type Props = {
  title: string;
  description?: string;
  createdAt: Date;
  id: string;
  onChat(): void;
  seen?: boolean;
};

const ChatCard = ({
  title,
  description,
  createdAt,
  onChat,
  id,
  seen,
}: Props) => {
  const { messageSentAt, urgent } = useChatTime(createdAt, id);

  return (
    <Card
      onClick={onChat}
      className="cursor-pointer rounded-none border-r-0 transition duration-150 ease-in-out hover:bg-muted"
    >
      <CardContent className="flex gap-3 py-4">
        <div>
          <Avatar>
            <AvatarFallback className="bg-muted">
              <User />
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex w-full justify-between">
          <div>
            <div className="flex items-center gap-5">
              <CardDescription className="font-bold leading-none text-gray-600">
                {title}
              </CardDescription>
              {urgent && !seen && <UrgentIcon />}
            </div>
            <CardDescription>
              {description
                ? description.substring(0, 20) + "..."
                : "This chatroom is empty"}
            </CardDescription>
          </div>
          <div className="flex w-[100px] justify-end">
            <CardDescription className="text-xs">
              {createdAt ? messageSentAt : ""}
            </CardDescription>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ChatCard;
