/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled from "styled-components";

import {
  ActionButton,
  BackButton
} from "screens/commons";

const ReviewDetails = () => {
  return (
    <ReviewDetailsWrapper>
      <Container>
        <BackButton />
        <Title>Review Details</Title>
        <SubHeader>Confirm your mobile number and email id</SubHeader>
        <InputsContainer>
          <InputContainer>
            <Label>Mobile Number</Label>
            <Input />
          </InputContainer>

          <InputContainer>
            <Label>Email Id</Label>
            <Input />
          </InputContainer>

          <ActionButton
            buttonText="Confirm"
            // callback={onSubmit}
          />

        </InputsContainer>
      </Container>
    </ReviewDetailsWrapper>
  )
};

const ReviewDetailsWrapper = styled.div`
  background: #F6F2FF;
  height: 100vh;
  width: 100%;
  scroll-behavior: scroll;
  position: relative;
  overflow-y: scroll;
`;

const Container = styled.div`
  padding: 2.4rem 0;
  width: 90%;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 400;
  color: #000000;
  font-family: DmSerif;
`;

const SubHeader = styled.p`
  margin: 1rem 0 0 0;
  padding: 0;
  color: #7E7E7E;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: MavenPro;
`;

const InputContainer = styled.div`
  margin-bottom: 3.3rem;
`;

const Label = styled.p`
  font-size: 1.4rem;
  font-weight: 400;
  color: #7E7E7E;
`;

const Input = styled.input`
  border: none;
  background: transparent;
  border-bottom: 1px solid #DDDDDD;
  outline: none;
  padding-bottom: 0.5rem;
  color: #000000;
  font-size: 1.6rem;
  font-family: MavenPro;
  font-weight: 500;
  width: 100%;
`;

const InputsContainer = styled.div`
  margin: 7rem 0 0 0;
`;

export default ReviewDetails;
