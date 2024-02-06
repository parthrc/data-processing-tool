import * as xlsx from "xlsx/xlsx.mjs";

//Convert excel to JSON string
// function comvertExceltoJson(file) {
//   let final = 1;

//   //FileReader API
//   const reader = new FileReader();
//   reader.onload = (e) => {
//     const data = e.target.result;
//     const workbook = xlsx.read(data, { type: "binary" });
//     const sheetName = workbook.SheetNames[0];
//     const worksheet = workbook.Sheets[sheetName];
//     const json = xlsx.utils.sheet_to_json(worksheet);

//     const jsonData = JSON.stringify(json, null, 2);
//     console.log("JSON JSON", json);
//     processData(jsonData);
//   };
//   reader.readAsBinaryString(file);

//   function processData(data) {
//     final = data;
//   }

//   return final;
// }

const readFileAsync = (inputFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      const content = e.target.result;
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

const processDataAsync = async (data) => {
  // Process the data asynchronously
  console.log("Processing data:", data);
};

const handleFileChange = async (event) => {
  const inputFile = event.target.files[0];

  try {
    const content = await readFileAsync(inputFile);
    // Now you can work with the file content
    console.log("File content:", content);

    //   // Process the data or perform other operations
    //   await processDataAsync(content);

    //   // Optionally, set the file content in the component state
    //   setFileContent(content);
  } catch (error) {
    console.error("Error reading the file:", error);
  }
};

export default readFileAsync;

//Download file from url
