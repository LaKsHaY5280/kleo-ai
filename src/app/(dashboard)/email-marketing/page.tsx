import { onGetAllCampaigns, onGetAllCustomers } from "@/lib/actions/mail";
import EmailMarketing from "@/components/email-marketing";
import InfoBar from "@/components/infobar";
import { currentUser } from "@clerk/nextjs";

const Page = async () => {
  const user = await currentUser();

  if (!user) return null;
  const customers = await onGetAllCustomers(user.id);
  const campaigns = await onGetAllCampaigns(user.id);

  if (!customers || !campaigns)
    return (
      <div className="flex w-full justify-center">
        <p>Add domain to continue</p>
      </div>
    );

  return (
    <>
      <InfoBar />
      <EmailMarketing
        campaign={campaigns?.campaign!}
        subscription={customers?.subscription!}
        domains={customers?.domains!}
      />
    </>
  );
};

export default Page;
