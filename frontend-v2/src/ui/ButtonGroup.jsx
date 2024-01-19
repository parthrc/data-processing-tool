import styled, { css } from "styled-components";

const directions = {
  column: css`
    flex-direction: column;
  `,
  row: css`
    flex-direction: row;
  `,
};

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 2rem;

  ${(props) => directions[props.direction]}
`;

ButtonGroup.defaultProps = {
  direction: "column",
};

export default ButtonGroup;
