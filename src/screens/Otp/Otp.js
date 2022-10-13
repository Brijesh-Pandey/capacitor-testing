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

const Otp = ({
  onSubmit,
  onKeyUpHandler,
  onOtpChangeHandler,
}) => {

  const numberOfOtpDigits = [...Array(5).keys()];

  const otpContent = numberOfOtpDigits.map(index => (
    <OtpInput
      autoFocus={index === 0 ? true : false}
      className="otp-input"
      data-index={index}
      id={index}
      key={index}
      maxLength="1"
      placeholder="__"
      type="tel"
      onChange={onOtpChangeHandler}
      onKeyUp={(event) => onKeyUpHandler(event.keyCode, index - 1, event.target, index + 1)}
    />
  ));

  return (
    <OtpWrapper>
      <Container>
        <BackButton />
        <Title>Enter Otp</Title>
        <SubHeader>We have sent an OTP to your phone number +91 8095XXXX56</SubHeader>
        <InputsContainer>

          <OtpContainer>
            <OtpInputs>
              {otpContent}

            </OtpInputs>
          </OtpContainer>

          <ActionButton
            buttonText="Confirm"
            callback={onSubmit}
            additionalStyles={{marginTop: "15rem"}}
          />

        </InputsContainer>
      </Container>
    </OtpWrapper>
  )
};

const OtpWrapper = styled.div`
  background: #F6F5F1;
  height: 100vh;
  width: 100%;
  scroll-behavior: scroll;
  position: relative;
  overflow-y: scroll;
`;

const OtpContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* padding: 0 30px; */
  margin-top: 2.4rem;

  @media (max-width: 768px) {
    padding: 0;
  }
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

const OtpInputs = styled.div`
  margin: 2rem auto 1rem;
  display: flex;
  max-width: 400px;
  min-width: 250px;
  justify-content: space-around;
`;

const OtpInput = styled.input`
  text-align: center;
  font-size: 1.6rem;
  border: none;
  width: 6rem;
  height: 6rem;
  margin-right: 1rem;
  border-radius: 12px;
  background-color: #fff;
  outline: unset;
  &::placeholder {
    color: #ddd;
    /* padding: 1rem; */
  }
`;

const InputsContainer = styled.div`
  margin: 7rem 0 0 0;
`;

export default Otp;
