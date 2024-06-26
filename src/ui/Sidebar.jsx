import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSideBar = styled.aside`
  padding: 3.2rem 2.4rem;
  border-right: 1px solid var(--color-grey-100);
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  gap: 3.4rem;
`;
//   grid-row: 1/-1; this mean from the frist row to last row
function Sidebar() {
  return (
    <StyledSideBar>
      <Logo />
      <MainNav />
    </StyledSideBar>
  );
}

export default Sidebar;
