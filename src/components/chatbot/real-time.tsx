import { Card } from "../ui/card";
import { useRealTime } from "@/hooks/chatbot/use-chatbot";

type Props = {
  chatRoomId: string;
  setChats: React.Dispatch<
    React.SetStateAction<
      {
        role: "user" | "assistant";
        content: string;
        link?: string | undefined;
      }[]
    >
  >;
};

const RealTimeMode = ({ chatRoomId, setChats }: Props) => {
  useRealTime(chatRoomId, setChats);

  return (
    <Card className="rounded-full bg-orange px-3 py-1 text-sm font-bold text-white">
      Real Time
    </Card>
  );
};

export default RealTimeMode;
