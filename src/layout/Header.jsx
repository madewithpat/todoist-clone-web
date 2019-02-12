import React from "react";
import styled from "styled-components";

const Header = () => {
   return (
      <StyledHeader>
         <Nav>
            <NavLink>
               <a href="/">Link1</a>
            </NavLink>
            <NavLink>
               <a href="/">Link2</a>
            </NavLink>
         </Nav>
      </StyledHeader>
   );
};

const StyledHeader = styled.header`
   grid-area: header;
   background-color: tomato;
`;

const Nav = styled.nav`
   list-style: none;
   display: flex;
   flex-direction: row;
   align-items: stretch;
   justify-content: center;
`;

const NavLink = styled.li`
   flex: 0 1 auto;
   display: flex;
   text-align: center;
   justify-content: center;
   align-items: center;
   padding: 1rem;
   margin: 0;
   margin-x: 0.5rem;
`;

export default Header;
