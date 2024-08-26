import { cn, extractUUIDFromString, getMonthName } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  message: {
    role: "assistant" | "user";
    content: string;
    link?: string;
  };
  createdAt?: Date;
};

const Bubble = ({ message, createdAt }: Props) => {
  let d = new Date();
  const image = extractUUIDFromString(message.content);
  console.log(message.link);

  return (
    <div
      className={cn(
        "flex items-end gap-2",
        message.role == "assistant"
          ? "self-start"
          : "flex-row-reverse self-end",
      )}
    >
      {message.role == "assistant" ? (
        <Avatar className="h-5 w-5">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      ) : (
        <Avatar className="h-5 w-5">
          <AvatarFallback>
            <User />
          </AvatarFallback>
        </Avatar>
      )}
      <div
        className={cn(
          "flex min-w-[200px] max-w-[300px] flex-col gap-3 rounded-t-md p-4",
          message.role == "assistant"
            ? "rounded-r-md bg-muted"
            : "rounded-l-md bg-grandis",
        )}
      >
        {createdAt ? (
          <div className="flex gap-2 text-xs text-gray-600">
            <p>
              {createdAt.getDate()} {getMonthName(createdAt.getMonth())}
            </p>
            <p>
              {createdAt.getHours()}:{createdAt.getMinutes()}
              {createdAt.getHours() > 12 ? "PM" : "AM"}
            </p>
          </div>
        ) : (
          <p className="text-xs">
            {`${d.getHours()}:${d.getMinutes()} ${
              d.getHours() > 12 ? "pm" : "am"
            }`}
          </p>
        )}
        {image ? (
          <div className="relative aspect-square">
            <Image src={`https://ucarecdn.com/${image[0]}/`} fill alt="image" />
          </div>
        ) : (
          <p className="text-sm">
            {message.content.replace("(complete)", " ")}
            {message.link && (
              <Link
                className="pl-2 font-bold underline"
                href={message.link}
                target="_blank"
              >
                Your Link
              </Link>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default Bubble;
