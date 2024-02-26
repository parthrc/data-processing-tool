import React from "react";

import { getFromLocalStorage } from "../utils/localStorageUtils.js";
import styled from "styled-components";

import Header from "./Header.jsx";

const StyledJsonTableContainer = styled.div`
  background-color: white;
  height: 40rem;
  overflow: auto;
  padding: 1.5rem;
  font-size: 1rem;
`;

const StyledTable = styled.table`
  background-color: var(--color-grey-200);
  width: 100%;
`;

const StyledHeaderRow = styled.th`
  color: black;
  border: 1px solid var(--color-grey-600);
`;

const StyledTableRow = styled.tr``;

const StyledTableData = styled.td`
  padding: 0.3rem;
  border: 1px solid var(--color-grey-600);
`;

const StyledNoFiles = styled.p`
  color: black;
  font-size: 2rem;
  text-align: center;
`;

const JsonTable = () => {
  //Get current file from localstorage

  const currentFile = getFromLocalStorage("current_file");
  const current_file_name = getFromLocalStorage("current_file_name");

  if (currentFile === "") {
    return (
      <StyledNoFiles>Please select a file from the dashboard</StyledNoFiles>
    );
  }

  const jsonFile = currentFile;

  // Extract headers from the first object in the array
  const headers = Object.keys(jsonFile[0]);

  return (
    <StyledJsonTableContainer>
      <Header size="small" bgcolor="secondary">
        {current_file_name}
      </Header>
      <StyledTable>
        <thead>
          <StyledTableRow>
            {/* Render table headers */}
            {headers.map((header) => (
              <StyledHeaderRow key={header}>{header}</StyledHeaderRow>
            ))}
          </StyledTableRow>
        </thead>
        <tbody>
          {/* Render table rows */}
          {jsonFile.map((item, index) => (
            <StyledTableRow key={index}>
              {/* Render table cells */}
              {headers.map((header) => (
                <StyledTableData key={header}>{item[header]}</StyledTableData>
              ))}
            </StyledTableRow>
          ))}
        </tbody>
      </StyledTable>
    </StyledJsonTableContainer>
  );
};

export default JsonTable;
