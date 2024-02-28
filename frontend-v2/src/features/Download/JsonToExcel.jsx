import Button from "../../ui/Button.jsx";
import * as xlsx from "xlsx/xlsx.mjs";
import { getCurrentfileInfoFromLocal } from "../../utils/localStorageUtils.js";
import FileFormatIcon from "../../ui/FileFormatIcon.jsx";

//^ Function converts json string to excel file
//^ ready for download
const downloadAsExcel = (data) => {
  const worksheet = xlsx.utils.json_to_sheet(data);

  const workbook = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(workbook, worksheet, "Sheet1");
  //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
  //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
  xlsx.writeFile(workbook, "DataSheet.xlsx");
};

function handleExcelClick(json) {
  downloadAsExcel(json);
  console.log("Excel file");
}

function JsonToExcel({ children }) {
  const cFile = getCurrentfileInfoFromLocal();
  const json = cFile.cFile;

  return (
    <FileFormatIcon
      onClick={() => handleExcelClick(json)}
      fileformat="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    >
      {children}
    </FileFormatIcon>
  );
}

export default JsonToExcel;
