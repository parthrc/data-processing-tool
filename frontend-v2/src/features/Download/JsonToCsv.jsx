import Papa from "papaparse";
import { saveAs } from "file-saver";
import Button from "../../ui/Button.jsx";
import { getCurrentfileInfoFromLocal } from "../../utils/localStorageUtils.js";

const JsonToCsvConverter = (json) => {
  // Convert JSON to CSV using PapaParse
  const csvData = Papa.unparse(json);

  // Create a Blob from the CSV data
  const blob = new Blob([csvData], { type: "text/csv;charset=utf-8" });

  // Trigger download using FileSaver.js
  saveAs(blob, `csvfile.csv`);
};

function handleCsvClick(json) {
  JsonToCsvConverter(json);
  console.log("CSV");
}

function JsonToCsv({ children }) {
  const cFile = getCurrentfileInfoFromLocal();

  const json = cFile.cFile;

  return <Button onClick={() => handleCsvClick(json)}>{children}</Button>;
}

export default JsonToCsv;
