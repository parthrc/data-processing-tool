import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import { HiOutlineHome } from "react-icons/hi2";
import { VscServerProcess } from "react-icons/vsc";
import { FaUsers } from "react-icons/fa";
import { FaFileSignature } from "react-icons/fa";
import Logout from "../features/Auth/Logout.jsx";
import { GrOverview } from "react-icons/gr";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 100%;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  list-style-type: none;
`;

const StyledNavLink = styled(NavLink)`
  &:link,
  &:visited {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    color: var(--color-grey-900);
    font-size: 1.6rem;
    font-weight: 600;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-grey-0);
    background-color: var(--color-brand-600);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 1.8rem;
    height: 1.8rem;
    color: var(--color-grey-700);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-grey-0);
  }
`;

function MainNav() {
  const adminPages = ["/admin", "/adminoverview", "/allusers", "/allfiles"];
  //Get current route
  const currentRoute = useLocation();

  //If Admin page then change navigation elements
  if (adminPages.includes(currentRoute.pathname)) {
    return (
      <NavContainer>
        <div>
          <NavList>
            <li>
              <StyledNavLink to="/admin">
                <GrOverview />
                <span>Overview</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/allusers">
                <FaUsers />
                <span>Users</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/allfiles">
                <FaFileSignature />
                <span>Files</span>
              </StyledNavLink>
            </li>
          </NavList>
        </div>
        <div>
          <Logout />
        </div>
      </NavContainer>
    );
  } else {
    return (
      <NavContainer>
        <div>
          <NavList>
            <li>
              <StyledNavLink to="/dashboard">
                <HiOutlineHome />
                <span>Dashboard</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/process">
                <VscServerProcess />
                <span>Process</span>
              </StyledNavLink>
            </li>
          </NavList>
        </div>
        <div>
          <Logout />
        </div>
      </NavContainer>
    );
  }
}

export default MainNav;
