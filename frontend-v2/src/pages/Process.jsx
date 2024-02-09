import { useEffect, useState } from "react";

import { useGetFileById } from "../features/Files/useGetFileById.jsx";
import JsonTable from "../ui/JsonTable.jsx";

import { DashboardContainer } from "./Dashboard.jsx";
import Spinner from "../ui/Spinner.jsx";

import Header from "../ui/Header.jsx";
import { getFileById } from "../services/apiFiles.js";

function Process() {
  const [jsonData, setJsonData] = useState([
    { name: "John", age: 25, country: "USA" },
    { name: "Jane", age: 30, country: "Canada" },
    { name: "Bob", age: 22, country: "UK" },
  ]);

  const { isGettingFileById } = useGetFileById();

  return (
    <DashboardContainer>
      <Header>Process</Header>
      {/* <Datagrid></Datagrid> */}
      {isGettingFileById === false ? (
        <JsonTable jsonData={jsonData} />
      ) : (
        <Spinner />
      )}
    </DashboardContainer>
  );
}

export default Process;
