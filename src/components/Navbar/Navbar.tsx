import Link from "next/link";
import DiscordIcon from "../icons/DiscordIcon";

export default function Navbar() {
  return (
    <div className="flex gap-3 w-full justify-between font-poppins px-5 py-5 text-whiteText text-[20px]">
      <h1>NSE Pirates</h1>
      <Link
        className="flex cursor-pointer items-center gap-2"
        href={"https://discord.gg/MRFTdQ9bUb"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <DiscordIcon width={30} height={30} />
        <div className="">Join Discord</div>
      </Link>
    </div>
  );
}
