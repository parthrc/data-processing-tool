import styled from "styled-components";
// import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
  background-color: var(--color-brand-50);
  padding: 3.2rem 1rem;

  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  height: 100vh;
 
`;

function Sidebar() {
  return (
    <StyledSidebar>
      {/* <Logo /> */}
      <MainNav />
    </StyledSidebar>
  );
}

export default Sidebar;
