import { useState } from "react";
import Clipboard from "../icons/Clipboard";
import Tick from "../icons/Tick";
import CopyDialog from "../CopyDialog/CopyDialog";

export default function DisplayStocks({
  stocksArray,
}: {
  stocksArray: string[][];
}) {
  const [isCopied, setIsCopied] = useState<{ state: boolean; index: number }>({
    state: false,
    index: -1,
  });

  async function clipboardCopy(currArray: string[], idx: number) {
    const newArray = currArray.map((element) => "NSE:" + element + ",");

    const copyString = newArray.join(" ");

    try {
      await navigator.clipboard.writeText(copyString);
      setIsCopied({ state: true, index: idx });
    } catch (err) {
      console.error("Unable to copy text: ", err);
    }
  }

  return (
    <div
      className={` flex flex-col gap-5 text-whiteText font-poppins mt-10 flex-wrap w-[80%] mx-auto ${
        stocksArray.length > 1 ? "p-5" : ""
      } duration-100`}
    >
      {stocksArray.map((array, idx) => {
        return (
          <div
            key={idx}
            className="bg-whiteText bg-opacity-10 backdrop-blur-sm p-5 rounded-2xl flex flex-col gap-3"
          >
            <div className="flex w-full justify-between">
              <div>{idx + 1}</div>
              {idx === isCopied.index ? (
                <div>
                  <Tick width={25} height={25} />
                  <CopyDialog index={idx + 1} />
                </div>
              ) : (
                <Clipboard
                  className="cursor-pointer"
                  onClick={() => clipboardCopy(array, idx)}
                  width={25}
                  height={25}
                />
              )}
            </div>

            <div>
              {array.map((stock, idx) => (
                <div
                  className="inline-block w-fit ml-2"
                  key={stock + idx}
                >{`NSE:${stock},`}</div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
