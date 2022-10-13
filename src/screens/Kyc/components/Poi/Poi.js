/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled from "styled-components";

import Camera from "../commons";

const Poi = ({
  handleFormData,
  updateStep
}) => {
  return (
    <Wrapper>
      <Title>Please take a picture of your proof of identity or upload it</Title>
      <Camera
        handleFormData={handleFormData}
        keyName="poi"
      />
      <NextButton
        onClick={() => updateStep(3)}
      >
        Next
      </NextButton>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const NextButton = styled.div`
  background-color: #6725F4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  color: #ffffff;
  height: 5.2rem;
  font-size: 1.8rem;
`;

const Title = styled.h2`
  margin: 0 auto;
  text-align: center;
  font-size: 1.8rem;
  color: #7E7E7E;
  margin: 2rem 0;
`;

export default Poi;
