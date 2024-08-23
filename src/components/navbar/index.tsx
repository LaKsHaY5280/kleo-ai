import Image from "next/image";
import Link from "next/link";

function NavBar() {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-solid border-zinc-100 px-7 py-1 font-bold leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="my-auto flex justify-center gap-1.5 self-stretch text-2xl tracking-tighter text-neutral-700">
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
      <ul className="my-auto hidden justify-between gap-5 self-stretch text-sm font-normal leading-5 text-neutral-700 max-md:max-w-full max-md:flex-wrap md:flex">
        <li>Home</li>
        <li>Pricing</li>
        <li>News Room</li>
        <li>Features</li>
        <li>Contact us</li>
      </ul>
      <Link
        href="/dashboard"
        className="rounded-sm bg-orange px-4 py-2 text-white"
      >
        Free Trial
      </Link>
    </div>
  );
}

export default NavBar;
