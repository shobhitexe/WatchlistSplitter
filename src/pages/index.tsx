import { DisplayStocks, FileInput } from "@/components";
import { useState } from "react";

export default function Home() {
  const [filteredArray, setFilteredArray] = useState<string[][]>([]);

  return (
    <main>
      <FileInput setFilteredArray={setFilteredArray} />
      <DisplayStocks stocksArray={filteredArray} />
    </main>
  );
}
