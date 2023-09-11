import Instagram from "../icons/Instagram";

export default function Navbar() {
  return (
    <div className="flex gap-3 w-full justify-between font-poppins px-5 py-5 text-whiteText text-[20px]">
      <h1>NSE Pirates</h1>
      <div
        className="flex cursor-pointer items-center gap-2"
        onClick={() => {
          window.open("https://www.instagram.com/hazard.trades/", "_blank");
        }}
      >
        <div className="">Follow on Instagram</div>

        <Instagram width={25} height={25} />
      </div>
    </div>
  );
}
