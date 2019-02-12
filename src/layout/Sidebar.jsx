import React from "react";
import styled from "styled-components";

const Sidebar = props => {
   return (
      <StyledSidebar>
         <p>This is the sidebar component</p>
         <p>It will eventually hold the task lists</p>
      </StyledSidebar>
   );
};

const StyledSidebar = styled.section`
   grid-area: sidebar;
   overflow: auto;
   width: 10rem;
   transition: all 0.5s;
`;

export default Sidebar;
