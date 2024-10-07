import { onGetCurrentDomainInfo } from "@/lib/actions/settings";
import BotTrainingForm from "@/components/forms/settings/bot-training";
import SettingsForm from "@/components/forms/settings/form";
import InfoBar from "@/components/infobar";
import ProductTable from "@/components/products";
import { redirect } from "next/navigation";

type Props = { params: { domain: string } };

const DomainSettingsPage = async ({ params }: Props) => {
  const domain = await onGetCurrentDomainInfo(params.domain);
  // if (!domain) redirect("/dashboard");

  return (
    <>
      <InfoBar />
      <div className="chat-window h-0 w-full flex-1 overflow-y-auto px-3">
        <SettingsForm
          plan={domain.subscription?.plan!}
          chatBot={domain.domains[0].chatBot}
          id={domain.domains[0].id}
          name={domain.domains[0].name}
        />
        <BotTrainingForm id={domain.domains[0].id} />
        <ProductTable
          id={domain.domains[0].id}
          products={domain.domains[0].products || []}
        />
      </div>
    </>
  );
};

export default DomainSettingsPage;
