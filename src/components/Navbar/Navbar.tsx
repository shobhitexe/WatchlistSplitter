import Discord from "../icons/Discord";

export default function Navbar() {
  return (
    <div className="flex gap-3 w-full justify-between font-poppins px-5 py-5 text-whiteText text-[20px]">
      <h1>NSE Pirates</h1>
      <div
        className="flex cursor-pointer items-center gap-5"
        onClick={() => {
          window.open("https://discord.gg/MRFTdQ9bUb", "_blank");
        }}
      >
        <div className="">Join Discord</div>
        <Discord width={25} height={25} />
      </div>
    </div>
  );
}
