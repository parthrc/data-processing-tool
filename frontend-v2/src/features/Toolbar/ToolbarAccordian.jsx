import styled, { css } from "styled-components";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Header from "../../ui/Header.jsx";

const active = {
  remove: css`
    border: 5px solid red;
  `,
  filter: css`
    border: 5px solid green;
  `,
  sort: css`
    border: 5px solid blue;
  `,
};

const StyledToolbarAccordian = styled.div`
  background-color: var(--color-grey-200);
  margin: 0.5rem;
  padding: 0.5rem;
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  ${(props) => active[props.activeProcess]}
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
    <StyledToolbarAccordian activeProcess={activeProcess}>
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
