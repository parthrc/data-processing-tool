import { styled, css } from "styled-components";

const bgcolors = {
  primary: css`
    background-color: var(--color-brand-700);
  `,
  secondary: css`
    background-color: var(--color-brand-orange);
  `,
  remove: css`
    background-color: red;
  `,
  filter: css`
    background-color: green;
  `,
  sort: css`
    background-color: blue;
  `,
};

const sizes = {
  big: css`
    padding: 1.2rem 4.8rem;
    font-size: 2rem;
  `,
  small: css`
    padding: 0.5rem 2rem;
    font-size: 1.2rem;
  `,
};

const StyledHeader = styled.header`
  /* background-color: var(--color-brand-700); */
  ${(props) => bgcolors[props.bgcolor]}
  ${(props) => sizes[props.size]}

  border-bottom: 1px solid var(--color-grey-100);
  display: flex;
  justify-content: center;
  align-items: center;
  color: aliceblue;
  width: 100%;
  text-transform: uppercase;
`;

StyledHeader.defaultProps = {
  bgcolor: "primary",
  size: "big",
};

function Header({ children, bgcolor, size }) {
  return (
    <StyledHeader bgcolor={bgcolor} size={size}>
      {children}
    </StyledHeader>
  );
}

export default Header;
