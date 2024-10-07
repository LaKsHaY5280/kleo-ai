import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

function NavBar() {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-solid border-zinc-100 px-10 py-5 font-bold leading-[154.5%] max-md:flex-wrap max-md:px-5">
      <div className="my-auto flex justify-center gap-1.5 self-stretch text-2xl tracking-tighter text-neutral-700">
        <Image
          src="/images/full_logo.png"
          alt="LOGO"
          sizes="100vw"
          style={{
            width: "150px",
            height: "auto",
          }}
          width={0}
          height={0}
        />
      </div>

      <Link href="/dashboard">
        <Button>Free Trial</Button>
      </Link>
    </div>
  );
}

export default NavBar;
