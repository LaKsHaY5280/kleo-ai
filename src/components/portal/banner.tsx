import Image from "next/image";

export const PortalBanner = () => {
  return (
    <div className="flex w-full justify-center bg-muted py-5">
      <Image
        src="/images/logo.png"
        alt="LOGO"
        sizes="100vw"
        style={{
          width: "100px",
          height: "auto",
        }}
        width={0}
        height={0}
      />
    </div>
  );
};
