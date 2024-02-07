import * as xlsx from "xlsx/xlsx.mjs";

const convertExcelToJson = (inputFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = xlsx.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = xlsx.utils.sheet_to_json(worksheet);
      const jsonData = JSON.stringify(json);
      resolve(jsonData);
    };

    reader.onerror = (e) => {
      reject(e);
    };

    reader.readAsArrayBuffer(inputFile);
  });
};

export default convertExcelToJson;