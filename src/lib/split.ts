import readXlsxFile from "read-excel-file";

export async function splitStocks(excelFile: File) {
  const stocksArray: string[] = [];

  const rows = await readXlsxFile(excelFile);

  rows.map((stock) => {
    if (stock[2] === null || stock[2] === undefined || stock[2] === "Symbol")
      return;

    stocksArray.push(String(stock[2]));
  });

  const outputArray = [];
  const chunkSize = 30;
  let currentIndex = 0;

  while (currentIndex < stocksArray.length) {
    outputArray.push(stocksArray.slice(currentIndex, currentIndex + chunkSize));
    currentIndex += chunkSize;
  }

  return outputArray;
}
