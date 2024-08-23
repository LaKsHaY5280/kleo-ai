import { onLoginUser } from "@/lib/actions/auth";
import SideBar from "@/components/sidebar";
import { ChatProvider } from "@/context/user-chat-context";

const OwnerLayout = async ({ children }: { children: React.ReactNode }) => {
  const authenticated = await onLoginUser();
  if (!authenticated) return null;

  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <SideBar domains={authenticated.domain} />
        <div className="flex h-screen w-full flex-col pl-20 md:pl-4">
          {children}
        </div>
      </div>
    </ChatProvider>
  );
};

export default OwnerLayout;
