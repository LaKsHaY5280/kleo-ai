import { PortalBanner } from "@/components/portal/banner";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <div className="flex flex-col md:h-screen">
      <PortalBanner />
      <div className="container mt-12 flex h-0 flex-1 justify-center">
        {children}
      </div>
    </div>
  );
};

export default Layout;
