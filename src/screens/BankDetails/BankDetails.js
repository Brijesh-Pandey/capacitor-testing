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

const BankDetails = ({
  onChangeHandler,
  onSubmit,
  formData,
  isLoading
}) => {
  return (
    <BasicDetailsWrapper>
      <Container>
        <BackButton />
        <Title>Bank Details</Title>
        <SubHeader>Type in all your details correctly and recheck</SubHeader>
        <InputsContainer>

          <InputContainer>
            <Label>Account Number</Label>
            <Input
              name="beneficiaryAccountNo"
              value={formData.beneficiaryAccountNo}
              onChange={onChangeHandler}
            />
          </InputContainer>

          <InputContainer>
            <Label>IFSC Code</Label>
            <Input
              name="beneficiaryAccountIfsc"
              value={formData.beneficiaryAccountIfsc}
              onChange={onChangeHandler}
            />
          </InputContainer>

          <DisclaimerContainer>
          This bank account will be the default account or all your investments and withdrawals
          </DisclaimerContainer>


          <ActionButton
            buttonText="Confirm"
            callback={onSubmit}
            isLoading={isLoading}
          />

        </InputsContainer>
      </Container>
    </BasicDetailsWrapper>
  )
};

const BasicDetailsWrapper = styled.div`
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

const DisclaimerContainer = styled.div`
  background-color: #ffffff;
  color: #7E7E7E;
  font-size: 1.4rem;
  padding: 2rem;
  border-radius: 4px;
`;

export default BankDetails;
