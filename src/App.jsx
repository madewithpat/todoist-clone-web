import React, { Component } from "react";
import styled from "styled-components";
import Layout from "./layout";

class App extends Component {
   render() {
      return (
         <Layout>
            <H1>Hello App</H1>
         </Layout>
      );
   }
}

const H1 = styled.h1`
   text-align: center;
`;

export default App;
