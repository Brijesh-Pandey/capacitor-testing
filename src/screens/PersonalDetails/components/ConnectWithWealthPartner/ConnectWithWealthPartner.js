/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled from "styled-components";

import {
  BackButton
} from "screens/commons";

const connectWithImage = "https://ik.imagekit.io/aboutUs/KYC/PoliticalExposure_YaMd6_Af3R.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660736091708";

const ConnectWithWealthPartner = () => {
  return (
    <ConnectWithWealthPartnerWrapper>
      <Container>
        <BackButton />
        <DataContainer>
          <ImageContainer>
            <img alt="connect-with-wealth-partner" src={connectWithImage} />
          </ImageContainer>
          <Title>Connect with your<br /> Wealth Partner</Title>
          <SubHeader>
            Due to your Political Exposure
            we wish to ensure you the best services.
          </SubHeader>
          <PartnerCard>
            <Avatar />
            <WmNameContainer>
              <Name>I am god</Name>
              <ConnectNowText>Connect Now</ConnectNowText>
              <Summary>With Your Wealth Partner</Summary>
            </WmNameContainer>
          </PartnerCard>
          <GoToHomeContainer>
            Go to Home
          </GoToHomeContainer>
        </DataContainer>
      </Container>
    </ConnectWithWealthPartnerWrapper>
  );
};

const ConnectWithWealthPartnerWrapper = styled.div`
  background: #ffffff;
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
  color: #7E7E7E;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: MavenPro;
  margin-top: 1.6rem;
  max-width: 80%;
`;

const PartnerCard = styled.div`
  background-color: #F6F2FF;
  border-radius: 4px;
  padding: 1.6rem;
  width: 100%;
  margin-top: 4.4rem;
  display: flex;
`;

const Avatar = styled.div`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  background: #ffffff;
  margin-right: 2rem;
`;

const WmNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Name = styled.p`
  font-size: 1rem;
  color: #000000;
  font-weight: 500;
  font-family: MavenPro;
`;

const ConnectNowText = styled(Name)`
  font-size: 1.6rem;
`;

const Summary = styled(Name)`
  color: #7E7E7E;
  font-size: 1.4rem;
`;

const GoToHomeContainer = styled.div`
  color: #6725F4;
  padding: 4rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #DDDDDD ;
  width: 100%;
  margin-top: 5rem;
  font-size: 1.6rem;
`;

export default ConnectWithWealthPartner;
