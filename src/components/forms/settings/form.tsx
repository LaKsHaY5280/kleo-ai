"use client";
import { Separator } from "@/components/ui/separator";
import { useSettings } from "@/hooks/settings/use-settings";
import { DomainUpdate } from "./domain-update";
import CodeSnippet from "./code-snippet";
import PremiumBadge from "@/assets/icons/premium-badge";
import EditChatbotIcon from "./edit-chatbot-icon";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Loader } from "@/components/loader";

const WelcomeMessage = dynamic(
  () => import("./greetings-message").then((props) => props.default),
  {
    ssr: false,
  },
);

type Props = {
  id: string;
  name: string;
  plan: "STANDARD" | "PRO" | "ULTIMATE";
  chatBot: {
    id: string;
    icon: string | null;
    welcomeMessage: string | null;
  } | null;
};

const SettingsForm = ({ id, name, chatBot, plan }: Props) => {
  const {
    register,
    onUpdateSettings,
    errors,
    onDeleteDomain,
    deleting,
    loading,
  } = useSettings(id);
  return (
    <form className="flex flex-col gap-8 pb-10" onSubmit={onUpdateSettings}>
      <div className="flex flex-col gap-3">
        <h2 className="text-2xl font-bold">Domain Settings</h2>
        <Separator orientation="horizontal" />
        <DomainUpdate name={name} register={register} errors={errors} />
        <CodeSnippet id={id} />
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold">Chatbot Settings</h2>
          <div className="flex items-center gap-1 rounded-full bg-stone-800 px-3 py-1 text-xs font-bold">
            <PremiumBadge />
            Premium
          </div>
        </div>
        <Separator orientation="horizontal" />
        <div className="grid md:grid-cols-2">
          <div className="order-last col-span-1 flex flex-col gap-5 md:order-first">
            <EditChatbotIcon
              chatBot={chatBot}
              register={register}
              errors={errors}
            />
            <WelcomeMessage
              message={chatBot?.welcomeMessage!}
              register={register}
              errors={errors}
            />
          </div>
          <div className="relative col-span-1">
            <Image
              src="/images/bot-ui.png"
              className="sticky top-0"
              alt="bot-ui"
              width={530}
              height={769}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-end gap-5">
        <Button
          onClick={onDeleteDomain}
          variant="destructive"
          type="button"
          className="h-[50px] px-10"
        >
          <Loader loading={deleting}>Delete Domain</Loader>
        </Button>
        <Button type="submit" className="h-[50px] w-[100px]">
          <Loader loading={loading}>Save</Loader>
        </Button>
      </div>
    </form>
  );
};

export default SettingsForm;
