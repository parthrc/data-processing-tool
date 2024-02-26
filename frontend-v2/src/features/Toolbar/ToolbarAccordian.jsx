import styled from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Header from "../../ui/Header.jsx";

const StyledToolbarAccordian = styled.div`
  background-color: white;
  margin: 0.5rem;
  padding: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
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

  &:hover {
    cursor: pointer;
    color: red;
  }
`;

function ToolbarAccordian({ children, onClick, activeProcess }) {
  return (
    <StyledToolbarAccordian>
      <Header size="small" bgcolor={activeProcess}>
        {activeProcess} process options:
      </Header>
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
