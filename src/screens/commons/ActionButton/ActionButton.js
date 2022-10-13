/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled from "styled-components";

import Spinner from "../Spinner";

const ActionButton = ({
  buttonText,
  callback,
  additionalStyles,
  isLoading
}) => {
  return (
    <ButtonContainer style={{...additionalStyles}} onClick={callback}>
      {
        isLoading ? (
          <Spinner />
        ) : (buttonText)
      }
    </ButtonContainer>
  );
};

const ButtonContainer = styled.button`
  padding: 2rem 0;
  background: #6725F4;
  border-radius: 5rem;
  width: 100%;
  margin-top: 3rem;
  color: #ffffff;
  font-size: 1.6rem;
  font-family: MavenPro;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default ActionButton;
