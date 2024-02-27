import styled from "styled-components";
import FilesList from "../features/Files/FilesList.jsx";
import Upload from "../ui/Upload.jsx";
import Header from "../ui/Header.jsx";
import Headerv2 from "../ui/Headerv2.jsx";

export const DashboardContainer = styled.div`
  height: 100%;
  overflow: auto;
`;

const Container = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 4fr 1fr;
  /* grid-template-rows: auto 1fr; */
  width: 100%;
  gap: 1.5rem;
`;

function Dashboard() {
  return (
    <DashboardContainer>
      <Headerv2>Dashboard</Headerv2>
      {/* <Header>Dashboard</Header> */}
      <Container>
        <FilesList></FilesList>
        <Upload />
      </Container>
    </DashboardContainer>
  );
}

export default Dashboard;
