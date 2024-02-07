import styled from "styled-components";
import FilesList from "../features/Files/FilesList.jsx";
import Upload from "../ui/Upload.jsx";

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

const Container = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: auto 1fr;
  width: 100%;
  background-color: red;
  
`;

function Dashboard() {
 
  return (
    <DashboardContainer>
      <PageTitle>Dashboard</PageTitle>
      <Container>
        <FilesList></FilesList>
        <Upload />
      </Container>
    </DashboardContainer>
  );
}

export default Dashboard;
