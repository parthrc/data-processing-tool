import styled from "styled-components";

const StyledToolbarItem = styled.div`
  background-color: blue;
  color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: 90%;
  }
`;

function ToolbarItem({ children, onClick }) {
  return <StyledToolbarItem onClick={onClick}>{children}</StyledToolbarItem>;
}

export default ToolbarItem;
