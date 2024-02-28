import Papa from "papaparse";
import { saveAs } from "file-saver";
import Button from "../../ui/Button.jsx";
import {
  getCurrentfileInfoFromLocal,
  getFromLocalStorage,
} from "../../utils/localStorageUtils.js";
import FileFormatIcon from "../../ui/FileFormatIcon.jsx";

const JsonToCsvConverter = (json) => {
  // Convert JSON to CSV using PapaParse
  const csvData = Papa.unparse(json);

  // Create a Blob from the CSV data
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });

  // Trigger download using FileSaver.js
  saveAs(blob, `csvfile.csv`);
};

function handleCsvClick() {
  const cFile = getFromLocalStorage("current_file");

  const json = cFile;
  JsonToCsvConverter(json);
  console.log("CSV");
}

function JsonToCsv({ children }) {
  return (
    <FileFormatIcon onClick={() => handleCsvClick()} fileformat="text/csv">
      {children}
    </FileFormatIcon>
  );
}

export default JsonToCsv;
