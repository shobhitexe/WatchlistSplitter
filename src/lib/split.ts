import readXlsxFile from "read-excel-file";

export function splitStocks(excelFile: File) {
  const stocksArray: string[] = [];

  readXlsxFile(excelFile).then((row) => {
    row.map((stock) => {
      if (stock[2] === null || stock[2] === undefined || stock[2] === "Symbol")
        return;

      stocksArray.push(String(stock[2]));
    });
  });

  return stocksArray;
}
