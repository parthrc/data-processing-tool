import styled from "styled-components";
import { useGetAllUsers } from "../features/Auth/useGetAllUsers.js";
import Spinner from "./Spinner.jsx";
import UserRow from "./UserRow.jsx";
import JsonTable from "./JsonTable.jsx";

const ListUl = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column-reverse;
`;

const UserListContainer = styled.div`
  background-color: red;
  padding: 0.2rem;

  width: fit-content;
`;

function UsersList() {
  const { allUsers, isGettingALlUsers, error } = useGetAllUsers();

  if (isGettingALlUsers) return <Spinner />;

  return (
    <UserListContainer>
      {allUsers ? (
        <>
          <ListUl>
            {allUsers.map(function (user) {
              return (
                <UserRow key={user.id}>
                  {user.username}
                  <span>{user.total_files}</span>
                </UserRow>
              );
            })}
          </ListUl>
        </>
      ) : (
        <p>No users</p>
      )}
    </UserListContainer>
  );
}

export default UsersList;
