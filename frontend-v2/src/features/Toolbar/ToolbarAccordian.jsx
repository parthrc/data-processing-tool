import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";

const StyledToolbarAccordian = styled.div`
  background-color: white;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledCloseBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  font-size: 2rem;
  padding-right: 5rem;
`;

const IconContainer = styled.div`
  cursor: pointer;
  color: #f04f4f;
  background-color: aqua;
  

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

function ToolbarAccordian({ children, onClick }) {
  return (
    <StyledToolbarAccordian>
      <StyledCloseBtnContainer>
        <IconContainer>
          <IoMdCloseCircleOutline onClick={onClick} />
        </IconContainer>
      </StyledCloseBtnContainer>
      {children}
    </StyledToolbarAccordian>
  );
}

export default ToolbarAccordian;
