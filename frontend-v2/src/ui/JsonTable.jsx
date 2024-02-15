import React from "react";

import { getFromLocalStorage } from "../utils/localStorageUtils.js";
import styled from "styled-components";

const StyledJsonTableContainer = styled.div`
  background-color: green;
`;

const JsonTable = () => {
  //Get current file from localstorage

  const currentFile = getFromLocalStorage("current_file");
  const current_file_name = getFromLocalStorage("current_file_name");

  if (currentFile === "") {
    return <p>PLease select a file from the dashboard</p>;
  }

  const jsonFile = currentFile;

  // Extract headers from the first object in the array
  const headers = Object.keys(jsonFile[0]);

  return (
    <StyledJsonTableContainer>
      <p>{current_file_name}</p>
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
    </StyledJsonTableContainer>
  );
};

export default JsonTable;
