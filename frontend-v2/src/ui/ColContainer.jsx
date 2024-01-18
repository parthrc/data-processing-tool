import styled, { css } from "styled-components";

const maxWidth = {
  100: css`
    max-width: 100%;
  `,
  50: css`
    max-width: 50%;
  `,
  70: css`
    max-width: 70%;
  `,
  60: css`
    max-width: 60%;
  `,
};

const ColContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${(props) => maxWidth[props.maxWidth]}
`;

ColContainer.defaultProps = {
  maxWidth: "100",
};

export default ColContainer;
