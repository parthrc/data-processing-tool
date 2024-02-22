import styled from "styled-components";

const UserRowItem = styled.li`
  background-color: var(--color-grey-200);
  padding-inline: 1rem;
  padding-block: 0.5rem;

  margin-bottom: 0.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  

  &:hover {
    cursor: pointer;
    border: 1px solid var(--color-brand-orange);
  }
`;

function UserRow({ children }) {
  return <UserRowItem>{children}</UserRowItem>;
}

export default UserRow;
