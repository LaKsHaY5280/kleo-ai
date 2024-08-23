import InfoBar from "@/components/infobar";
import BillingSettings from "@/components/settings/billing-settings";
import ChangePassword from "@/components/settings/change-password";
import DarkModetoggle from "@/components/settings/dark-mode";

const page = () => {
  return (
    <div>
      <InfoBar />
      <div className="chat-window flex h-0 w-full flex-1 flex-col gap-10">
        <BillingSettings />
        <DarkModetoggle />
        <ChangePassword />
      </div>
    </div>
  );
};
export default page;
