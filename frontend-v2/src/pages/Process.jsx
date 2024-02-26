import JsonTable from "../ui/JsonTable.jsx";
import { DashboardContainer } from "./Dashboard.jsx";
import Header from "../ui/Header.jsx";
import Toolbar from "../features/Toolbar/Toolbar.jsx";
import ProcessLog from "../ui/ProcessLog.jsx";
import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 1.5rem;
  padding: 1.5rem;
`;

function Process() {
  return (
    <DashboardContainer>
      <Header>Process</Header>
      <Toolbar bgcolor="secondary" size="small"></Toolbar>
      <MainContainer>
        <JsonTable />

        <ProcessLog />
      </MainContainer>
    </DashboardContainer>
  );
}

export default Process;
