import styled from "styled-components";
import Button from "../ui/Button.jsx";
import Header from "../ui/Header.jsx";
import UsersList from "../ui/UsersList.jsx";
import { FilesListContainer } from "../features/Files/FilesList.jsx";
import Modal from "../ui/Modal/Modal.jsx";
import RegisterForm from "../features/Auth/RegisterForm.jsx";

const PageContainer = styled.div`
  padding: 1rem;
`;

function AllUsers() {
  return (
    <>
      <Header>All users</Header>
      <PageContainer>
        <UsersList></UsersList>
        <Modal>
          <Modal.Open opens="addUser">
            <Button>Add new user</Button>
          </Modal.Open>
          <Modal.Window name="addUser">
            <RegisterForm />
          </Modal.Window>
        </Modal>
      </PageContainer>
    </>
  );
}

export default AllUsers;
