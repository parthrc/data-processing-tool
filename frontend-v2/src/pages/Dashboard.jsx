import styled from "styled-components";
import FilesList from "../features/Files/FilesList.jsx";

export const DashboardContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

export const PageTitle = styled.h1`
  text-align: center;
  font-size: 2rem;
  background-color: var(--color-brand-50);
  color: var(--color-brand-800);
`;

function Dashboard() {
  console.log("In Dashboard");
  return (
    <DashboardContainer>
      <PageTitle>Dashboard</PageTitle>
      <FilesList></FilesList>
    </DashboardContainer>
  );
}

export default Dashboard;
