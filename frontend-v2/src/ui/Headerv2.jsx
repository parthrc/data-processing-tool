import styled from "styled-components";

const StyledPageHeader = styled.h1`
  color: var(--color-brand-600);
  padding: 1rem;
  text-align: center;
  text-transform: uppercase;
  text-decoration: underline;
`;

function Headerv2({ children }) {
  return <StyledPageHeader>{children}</StyledPageHeader>;
}

export default Headerv2;
