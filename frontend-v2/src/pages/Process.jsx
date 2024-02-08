import { useEffect, useState } from "react";
import { useGetCurrentFileId } from "../features/Files/useGetCurrentFile.jsx";
import { useGetFileById } from "../features/Files/useGetFileById.jsx";
import JsonTable from "../ui/JsonTable.jsx";
import excelToJson from "../utils/helpers.js";
import { DashboardContainer } from "./Dashboard.jsx";
import Spinner from "../ui/Spinner.jsx";
import Datagrid from "../ui/Datagrid.jsx";
import Header from "../ui/Header.jsx";

function Process() {
  const [jsonData, setJsonData] = useState([
    { name: "John", age: 25, country: "USA" },
    { name: "Jane", age: 30, country: "Canada" },
    { name: "Bob", age: 22, country: "UK" },
  ]);
  // const jsonData = [
  //   { name: "John", age: 25, country: "USA" },
  //   { name: "Jane", age: 30, country: "Canada" },
  //   { name: "Bob", age: 22, country: "UK" },
  // ];

  const { file: currentFile, isGettingFileById } = useGetFileById();

  return (
    <DashboardContainer>
      <Header>Process</Header>
      <Datagrid></Datagrid>
      {isGettingFileById === false ? (
        <JsonTable jsonData={jsonData} />
      ) : (
        <Spinner />
      )}
    </DashboardContainer>
  );
}

export default Process;
