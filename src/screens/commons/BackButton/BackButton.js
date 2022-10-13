/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled from "styled-components";

const backButton = "https://ik.imagekit.io/aboutUs/KYC/Arrow_5_LSxRUeWrV.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660717751966";

const BackButton = () => {
  return (
    <BackIconContainer>
      <BackIcon src={backButton} />
    </BackIconContainer>
  );
};

const BackIconContainer = styled.div`
  margin-bottom: 3.2rem;
`;

const BackIcon = styled.img``;

export default BackButton;
