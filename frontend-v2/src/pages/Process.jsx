import JsonTable from "../ui/JsonTable.jsx";
import { DashboardContainer } from "./Dashboard.jsx";
import Header from "../ui/Header.jsx";
import Toolbar from "../features/Toolbar/Toolbar.jsx";
import ProcessLog from "../ui/ProcessLog.jsx";
import styled from "styled-components";

const TableContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
`;

function Process() {
  return (
    <DashboardContainer>
      <Header>Process</Header>
      <Toolbar bgcolor="secondary" size="small"></Toolbar>
      <TableContainer>
        <JsonTable />
        <ProcessLog />
      </TableContainer>
    </DashboardContainer>
  );
}

export default Process;
