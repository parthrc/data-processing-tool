import styled, { css } from "styled-components";

const StyledToolbarItemCont = styled.div`
  display: flex;
  flex-direction: column;

  padding: 0.3rem;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const ToolbarIconColors = {
  Remove: css`
    background-color: red;
  `,
  Filter: css`
    background-color: green;
  `,
  Sort: css`
    background-color: blue;
  `,
};

const StyledToolbarItem = styled.div`
  color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 1rem;
  width: 4rem;

  ${(props) => ToolbarIconColors[props.type]}

  &:hover {
    cursor: pointer;
    opacity: 70%;
  }
`;

StyledToolbarItem.defaultProps = {
  title: "Remove",
};

function ToolbarItem({ children, onClick, title }) {
  return (
    <StyledToolbarItemCont>
      <StyledToolbarItem onClick={onClick} type={title}>
        {children}
      </StyledToolbarItem>
      <p>{title}</p>
    </StyledToolbarItemCont>
  );
}

export default ToolbarItem;
