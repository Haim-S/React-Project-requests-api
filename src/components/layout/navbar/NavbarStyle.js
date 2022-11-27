
import styled from "@emotion/styled";

export const NavbarAboutContainerStyle = styled.div`
margin-right: 30px;
color: black;
width: 100vw;
height: 60px;
background-color: var(--navbar-background-color);
border-bottom: ${({borderbottom})=> borderbottom ? "1px solid rgba(0, 0, 0, 0.1)" : "none"} ;
`

export const NavbarLinksWrapper = styled.ul`
display: flex;
  list-style: none;
  margin-left: auto;
  width: 250px;
  height: 100%;
  align-items: center;
  justify-content: space-evenly;
`


export const NavbarLinkStyle = styled.li`
border-bottom: ${({ active }) =>
    active ? "2px solid var(--main-background-color)" : "none"};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    border-bottom: 2px solid var(--main-background-color);
  }
`