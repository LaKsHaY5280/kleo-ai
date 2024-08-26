import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const Responding = () => {
  return (
    <div className="flex items-end gap-3 self-start">
      <Avatar className="h-5 w-5">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="chat-bubble">
        <div className="typing">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};
