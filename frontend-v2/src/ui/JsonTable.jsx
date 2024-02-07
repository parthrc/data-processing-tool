import React from "react";
import { useTable } from "react-table";
import { useGetFileById } from "../features/Files/useGetFileById.jsx";

const JsonTable = () => {
  //Get current file
  const { file: currentFile, isGettingFileById } = useGetFileById();

  const file_data_text = currentFile.file_data_text;

  const jsonFile = JSON.parse(file_data_text);

  // Extract headers from the first object in the array
  const headers = Object.keys(jsonFile[0]);

  return (
    <>
      <p>{currentFile.file[0].file_name}</p>
      <table>
        <thead>
          <tr>
            {/* Render table headers */}
            {headers.map((header) => (
              <th key={header}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Render table rows */}
          {jsonFile.map((item, index) => (
            <tr key={index}>
              {/* Render table cells */}
              {headers.map((header) => (
                <td key={header}>{item[header]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default JsonTable;
