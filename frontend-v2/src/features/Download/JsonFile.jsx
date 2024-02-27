import { saveAs } from "file-saver";
import { getCurrentfileInfoFromLocal } from "../../utils/localStorageUtils.js";
import Button from "../../ui/Button.jsx";

const JsonFileSaver = (json) => {
  console.log("BEFORE JSON:", json);
  console.log("TYPE:", typeof json);
  // Create a Blob from the JSON string
  const blob = new Blob([json], { type: "text/json;charset=utf-8" });

  // Trigger download using FileSaver.js
  saveAs(blob, `jsonfile.json`);
};

function handleJsonClick(json) {
  JsonFileSaver(json);
  console.log("Json");
}

function JsonFile({ children }) {
  const cFile = getCurrentfileInfoFromLocal();
  const json = JSON.stringify(cFile.cFile);

  return <Button onClick={() => handleJsonClick(json)}>{children}</Button>;
}

export default JsonFile;
