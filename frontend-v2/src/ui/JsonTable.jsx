import React from "react";

import { getFromLocalStorage } from "../utils/localStorageUtils.js";
import styled from "styled-components";

const StyledJsonTableContainer = styled.div`
  background-color: white;
  height: 40rem;
  overflow: auto;
  padding: 1.5rem;
  font-size: 1rem;
`;

const StyledTable = styled.table`
  background-color: orange;
`;

const StyledHeaderRow = styled.p`
  background-color: red;
  color: purple;
  font-size: 2rem;
  z-index: 99;
`;

const JsonTable = ({ user }) => {
  if (user) {
    const headers2 = Object.keys(user[0]);
    return (
      <StyledJsonTableContainer>
        <StyledTable>
          <thead>
            <tr>
              <StyledHeaderRow>Hello</StyledHeaderRow>
              {/* Render table headers */}
              {headers2.map(function (header) {
                return <StyledHeaderRow key={header}>{header}</StyledHeaderRow>;
              })}
            </tr>
          </thead>
          <tbody>
            {/* Render table rows */}
            {user.map((item, index) => (
              <tr key={index}>
                {/* Render table cells */}
                {headers2.map((header) => (
                  <td key={header}>{item[header]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </StyledTable>
      </StyledJsonTableContainer>
    );
  }
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
