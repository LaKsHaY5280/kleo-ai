import { currentUser } from "@clerk/nextjs";
import Image from "next/image";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = async ({ children }: Props) => {
  const user = await currentUser();

  if (user) redirect("/");

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="relative hidden max-h-full w-full flex-col items-center justify-center gap-3 overflow-hidden bg-stone-900 px-24 pt-10 lg:flex">
        <h2 className="w-full font-bold text-stone-300 md:text-6xl">
          Hi, I’m your AI powered sales assistant, Kleo!
        </h2>
        <p className="mb-10 w-full text-stone-400 md:text-sm">
          Kleo is capable of capturing lead information without a form... <br />
          something never done before 😉
        </p>
      </div>
      <div className="flex w-full flex-col items-start p-6 lg:w-full">
        <Image
          src="/images/full_logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: "20%",
            height: "auto",
          }}
          width={0}
          height={0}
        />
        {children}
      </div>
    </div>
  );
};

export default Layout;
