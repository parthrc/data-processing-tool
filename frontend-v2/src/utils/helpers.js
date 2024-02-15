import * as xlsx from "xlsx/xlsx.mjs";
import Papa from "papaparse";
import { json } from "react-router-dom";

// !Convert Excel to JSON
export const convertExcelToJson = (inputFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = xlsx.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = xlsx.utils.sheet_to_json(worksheet, { defval: "" });
      const jsonData = JSON.stringify(json);
      resolve(jsonData);
    };

    reader.onerror = (e) => {
      reject(e);
    };

    reader.readAsArrayBuffer(inputFile);
  });
};

// !Convert CSV to JSON
export const convertCsvToJson = (inputFile) => {
  return new Promise((resolve, reject) => {
    Papa.parse(inputFile, {
      header: true,
      complete: function (results) {
        const jsonArray = results.data;
        resolve(jsonArray);
      },
    });
  });
};

// !Convert JSON file to JSON string
export const convertJsonFileToJson = (inputFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const data = e.target.result;

      resolve(data);
    };

    reader.onerror = (e) => {
      reject(e);
    };

    reader.readAsBinaryString(inputFile);
  });
};

// !Main convertor
export async function mainConvertor(inputFile) {
  //Constants
  const CONTENT_TYPE_JSON = "application/json";
  const CONTENT_TYPE_CSV = "text/csv";
  const CONTENT_TYPE_EXCEL =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";

  const fileTypes = [CONTENT_TYPE_JSON, CONTENT_TYPE_CSV, CONTENT_TYPE_EXCEL];

  try {
    //CHeck if file format is supported
    if (fileTypes.includes(inputFile.type)) {
      console.log(inputFile.type);

      switch (inputFile.type) {
        case CONTENT_TYPE_CSV: {
          console.log("CSV");
          const Data = await convertCsvToJson(inputFile);
          const jsonData = JSON.stringify(Data);
          return jsonData;
        }

        case CONTENT_TYPE_EXCEL: {
          console.log("EXCEL");
          const jsonData = await convertExcelToJson(inputFile);
          return jsonData;
        }

        case CONTENT_TYPE_JSON: {
          const jsonData = await convertJsonFileToJson(inputFile);
          return jsonData;
        }

        default:
          console.log("Default switch case");
          break;
      }
    } else {
      console.log(inputFile.type, ": File format not supported");
    }
  } catch (error) {
    throw new Error("Error while converting file to JSON", error);
  }
}

// !Extract keys from JSON object

export function extractKeysJson(json_obj) {
  const data = Object.keys(json_obj);

  const keys = [];

  for (const a in data) {
    keys.push({ key: a, name: a });
  }

  return keys;
}

export default convertExcelToJson;

// ! Check if JSON is valid
export function isValidJSON(jsonString) {
  try {
    JSON.parse(jsonString);
    return true;
  } catch (error) {
    return false;
  }
}
