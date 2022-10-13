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

const successScreenImage = "https://ik.imagekit.io/aboutUs/KYC/ApplicationSuccessfull_MwgMX2xx-2.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660736091705";

const SuccessScreen = () => {
  return (
    <SuccessScreenWrapper>
      <Container>
        <BackButton />

        <DataContainer>
          <ImageContainer>
            <img alt="connect-with-wealth-partner" src={successScreenImage} />
          </ImageContainer>
          <Title>Application Submitted<br />Successfully</Title>
          <SubHeader>
            It usually takes 1-2days to review
            and accept your application. We will keep you updated via your mobile number.
          </SubHeader>
          <SubHeader>Under review : As of 10th Aug 2022 5:05pm</SubHeader>
          <ActionButton
            buttonText="Ok, got it!"
            additionalStyles={{marginTop: "5rem"}}
          />

        </DataContainer>

      </Container>
    </SuccessScreenWrapper>
  );
};

const SuccessScreenWrapper = styled.div`
  background: #F6F5F1;
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

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const ImageContainer = styled.div``;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 2rem;
  font-weight: 400;
  color: #000000;
  font-family: DmSerif;
  margin-top: 3.6rem;
  line-height: 1.4;
`;

const SubHeader = styled.p`
  margin: 1rem 0 0 0;
  padding: 0;
  text-align: center;
  color: #7E7E7E;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: MavenPro;
  margin-top: 1.6rem;
  max-width: 80%;
  :not(:first-child) {
    margin-top: 3rem;
  }
`;

export default SuccessScreen;
