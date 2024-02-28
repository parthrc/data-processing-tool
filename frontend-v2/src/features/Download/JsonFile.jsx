import { saveAs } from "file-saver";
import {
  getCurrentfileInfoFromLocal,
  getFromLocalStorage,
} from "../../utils/localStorageUtils.js";
import Button from "../../ui/Button.jsx";
import FileFormatIcon from "../../ui/FileFormatIcon.jsx";

const JsonFileSaver = (json) => {
  // Create a Blob from the JSON string
  const blob = new Blob([json], { type: "text/json;charset=utf-8" });

  // Trigger download using FileSaver.js
  saveAs(blob, `jsonfile.json`);
};

function handleJsonClick() {
  const cFile = getFromLocalStorage("current_file");
  console.log("Current inside Excel", cFile);
  const json = JSON.stringify(cFile);
  JsonFileSaver(json);
  console.log("Json");
}

function JsonFile({ children }) {
  return (
    <FileFormatIcon
      onClick={() => handleJsonClick()}
      fileformat="application/json"
    >
      {children}
    </FileFormatIcon>
  );
}

export default JsonFile;
