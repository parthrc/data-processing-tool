import JsonTable from "../ui/JsonTable.jsx";
import excelToJson from "../utils/helpers.js";
import { DashboardContainer, PageTitle } from "./Dashboard.jsx";

function Process() {
  const jsonData = [
    { name: "John", age: 25, country: "USA" },
    { name: "Jane", age: 30, country: "Canada" },
    { name: "Bob", age: 22, country: "UK" },
  ];

 

  return (
    <DashboardContainer>
      <PageTitle>Process</PageTitle>
      <JsonTable jsonData={jsonData} />
      <JsonTable jsonData={jsonData} />
    </DashboardContainer>
  );
}

export default Process;
