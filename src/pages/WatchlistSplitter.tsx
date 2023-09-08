import { DisplayStocks, FileInput } from "@/components";
import Image from "next/image";
import { useState } from "react";

export default function WatchlistSplitter() {
  const [filteredArray, setFilteredArray] = useState<string[][]>([]);
  const [isListVisible, setIslistVisible] = useState<boolean>(false);

  return (
    <main>
      <FileInput
        setFilteredArray={setFilteredArray}
        setIslistVisible={setIslistVisible}
        isListVisible={isListVisible}
      />
      {isListVisible ? (
        <DisplayStocks stocksArray={filteredArray} />
      ) : (
        <Image
          src={"/images/warning.png"}
          width={1280}
          height={720}
          alt="warning"
          className="w-full"
        />
      )}
    </main>
  );
}
