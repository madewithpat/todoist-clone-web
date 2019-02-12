import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
   return (
      <GridContainer>
         <Header />
         <Sidebar />
         {children}
      </GridContainer>
   );
};

Layout.propTypes = {
   children: PropTypes.element.isRequired
};

const GridContainer = styled.div`
   height: 100vh;
   width: 100vw;
   margin: 0;
   padding: 0;
   display: grid;
   grid-template-columns: auto 1fr;
   grid-template-rows: 50px auto;
   grid-template-areas:
      "header header"
      "sidebar main";
`;

export default Layout;
