import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  HiArrowRightOnRectangle,
  HiOutlineCalendarDays,
  HiOutlineHome,
} from "react-icons/hi2";
import { VscServerProcess } from "react-icons/vsc";
import Button from "./Button.jsx";
import Logout from "../features/Auth/Logout.jsx";
import WelcomeUser from "./WelcomeUser.jsx";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: nowrap;
  height: 100%;
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

    color: var(--color-grey-600);
    font-size: 1.6rem;
    font-weight: 500;
    padding: 1.2rem 2.4rem;
    transition: all 0.3s;
  }

  /* This works because react-router places the active class on the active NavLink */
  &:hover,
  &:active,
  &.active:link,
  &.active:visited {
    color: var(--color-brand-500);
    background-color: var(--color-grey-50);
    border-radius: var(--border-radius-sm);
  }

  & svg {
    width: 2.4rem;
    height: 2.4rem;
    color: var(--color-grey-400);
    transition: all 0.3s;
  }

  &:hover svg,
  &:active svg,
  &.active:link svg,
  &.active:visited svg {
    color: var(--color-brand-600);
  }
`;

function MainNav() {
  //Get current route
  const currentRoute = useLocation();

  //If Admin page then change navigation elements
  if (currentRoute.pathname === "/admin") {
    return (
      <NavContainer>
        <div>
          <NavList>
            <li>
              <StyledNavLink to="/allusers">
                <HiOutlineHome />
                <span>Overview</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/process">
                <VscServerProcess />
                <span>Users</span>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/process">
                <VscServerProcess />
                <span>Files</span>
              </StyledNavLink>
            </li>
          </NavList>
        </div>
        <div>
          <StyledNavLink>
            <Logout />
          </StyledNavLink>
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
          <StyledNavLink>
            <Logout />
          </StyledNavLink>
        </div>
      </NavContainer>
    );
  }
}

export default MainNav;
