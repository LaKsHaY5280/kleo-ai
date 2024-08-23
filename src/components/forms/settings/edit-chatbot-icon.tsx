import Section from "@/components/section-label";
import UploadButton from "@/components/upload-button";
import { BotIcon } from "@/assets/icons/bot-icon";

import Image from "next/image";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

type Props = {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  chatBot: {
    id: string;
    icon: string | null;
    welcomeMessage: string | null;
  } | null;
};

const EditChatbotIcon = ({ register, errors, chatBot }: Props) => {
  return (
    <div className="flex flex-col items-start gap-5 py-5">
      <Section
        label="Chatbot icon"
        message="Change the icon for the chatbot."
      />
      <UploadButton label="Edit Image" register={register} errors={errors} />
      {chatBot?.icon ? (
        <div className="overflow-hidden rounded-full">
          <Image
            src={`https://ucarecdn.com/${chatBot.icon}/`}
            alt="bot"
            width={80}
            height={80}
          />
        </div>
      ) : (
        <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-grandis shadow-md">
          <BotIcon />
        </div>
      )}
    </div>
  );
};

export default EditChatbotIcon;
