/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import {
  DigioFlow,
  Facefinder,
  Kyc
} from "./components";


import styled from "styled-components";

const App = () => {
  return (
    <ComponentsWrapper>
      {/* <Kyc /> */}
      {/* <DigioFlow /> */}
      <Facefinder />
    </ComponentsWrapper>
  );
};

const ComponentsWrapper = styled.div`
  .custom-ion-page {
    overflow: auto;
  }
`;

export default App;
