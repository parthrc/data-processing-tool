import styled from "styled-components";
import Button from "../ui/Button.jsx";
import Header from "../ui/Header.jsx";
import UsersList from "../ui/UsersList.jsx";

const PageContainer = styled.div`
  padding: 1rem;
`;

function AllUsers() {
  return (
    <>
      <Header>All users</Header>
      <PageContainer>
        <UsersList></UsersList>
      </PageContainer>
    </>
  );
}

export default AllUsers;
