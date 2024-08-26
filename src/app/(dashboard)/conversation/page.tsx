import { onGetAllAccountDomains } from "@/lib/actions/settings";
import ConversationMenu from "@/components/conversations";
import Messenger from "@/components/conversations/messenger";
import InfoBar from "@/components/infobar";
import { Separator } from "@/components/ui/separator";

const ConversationPage = async () => {
  const domains = await onGetAllAccountDomains();
  return (
    <div className="flex h-full w-full">
      <ConversationMenu domains={domains?.domains} />

      <Separator orientation="vertical" />
      <div className="flex w-full flex-col">
        <div className="px-5">
          <InfoBar />
        </div>
        <Messenger />
      </div>
    </div>
  );
};

export default ConversationPage;
