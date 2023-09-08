import { splitStocks } from "@/lib/split";
import { useRouter } from "next/router";
import { ChangeEvent, FormEvent, useState } from "react";
import { Dispatch, SetStateAction } from "react";

export default function FileInput({
  setFilteredArray,
  setIslistVisible,
  isListVisible,
}: {
  setFilteredArray: Dispatch<SetStateAction<string[][]>>;
  setIslistVisible: Dispatch<SetStateAction<boolean>>;
  isListVisible: boolean;
}) {
  const [isExcel, setIsExcel] = useState<boolean>(false);
  const [excelFile, setExcelFile] = useState<File | undefined>(undefined);

  const router = useRouter();

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const lastThreeWords = event.target.value.slice(-3);
    const lastFourWords = event.target.value.slice(-4);

    if (lastFourWords === "xlsx" || lastThreeWords === "xls") {
      setIsExcel(true);

      if (event.target.files) {
        setExcelFile(event.target.files[0]);
      }
    }
  }

  async function handleFileSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (excelFile) {
      const filteredArray = await splitStocks(excelFile);
      setFilteredArray(filteredArray);
      setIslistVisible(true);
    }
  }

  return (
    <div className="w-full mx-auto mt-10 flex flex-col items-center gap-10 ">
      <form
        className="flex flex-col justify-center gap-10 w-full"
        onSubmit={handleFileSubmit}
      >
        <input
          type="file"
          placeholder="Upload Excel file"
          accept=".xlsx, .xls"
          className={`text-whiteText font-poppins border w-[70%] mx-auto cursor-pointer file:rounded-lg file:font-poppins ${
            isExcel ? "border-green-500" : "border-whiteText"
          } pl-5 pr-10 py-2 bg-inputBG border-opacity-40 rounded-xl`}
          onChange={handleFileChange}
        />
        {isExcel && !isListVisible && (
          <button className="bg-gradient-to-bl from-emerald-500 to-green-600 hover:bg-gradient-to-bl hover:from-emerald-500 hover:to-green-500 mx-auto w-fit duration-200 border-whiteText border-opacity-50 px-5  py-2 font-poppins rounded-xl">
            Upload
          </button>
        )}
      </form>

      {isListVisible && (
        <button
          className="bg-gradient-to-bl from-emerald-500 to-green-600 hover:bg-gradient-to-bl hover:from-emerald-500 hover:to-green-500 mx-auto w-fit duration-200 justify-center border-whiteText border-opacity-50 px-5  py-2 font-poppins rounded-xl"
          onClick={() => {
            setFilteredArray([]);
            setIslistVisible(false);
            router.reload();
          }}
        >
          Clear
        </button>
      )}
    </div>
  );
}
