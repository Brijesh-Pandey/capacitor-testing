/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import Kyc from "./components"

import styled from "styled-components";

const App = () => {
  return (
    <ComponentsWrapper>
      <Kyc />
    </ComponentsWrapper>
  );
};

const ComponentsWrapper = styled.div`
  .custom-ion-page {
    overflow: auto;
  }
`;

export default App;