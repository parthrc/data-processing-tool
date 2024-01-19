import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)`
  color: var(--color-brand-200);
  text-decoration: underline;
  &:hover {
    color: var(--color-brand-700);
  }
`;

export default StyledNavLink;
