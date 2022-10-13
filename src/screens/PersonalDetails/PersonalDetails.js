/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled, {css} from "styled-components";

import {
  ActionButton,
  BackButton
} from "screens/commons";

const PersonalDetails = ({
  checkField,
  checkedState,
  onChangeHandler,
  handleOnCheckboxChange,
  formData,
  onSubmit
}) => {
  return (
    <PersonalDetailsWrapper>
      <Container>
        <BackButton />
        <Title>Personal Details</Title>
        <SubHeader>Confirm your personal details</SubHeader>
        <InputsContainer>
          <InputContainer>
            <Label>PAN</Label>
            <Input
              name="pan"
              value={formData.pan}
              onChange={onChangeHandler}
            />
          </InputContainer>

          <InputContainer>
            <Label>Date of birth</Label>
            <Input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={onChangeHandler}
            />
          </InputContainer>

          {
            checkField.map(({name}, index) => {
              return (
                <CheckBoxContainer>
                  <CheckBox
                    type="checkbox"
                    name={name}
                    value={name}
                    checked={checkedState[index]}
                    onChange={() => handleOnCheckboxChange(index)}
                  />
                  <CheckboxText>{name}</CheckboxText>
                </CheckBoxContainer>
              );
            })
          }

          <ActionButton
            buttonText="Confirm"
            callback={onSubmit}
          />

        </InputsContainer>
      </Container>
    </PersonalDetailsWrapper>
  )
};

const PersonalDetailsWrapper = styled.div`
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

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button,
  ::-webkit-calendar-picker-indicator {
    opacity: 0;
    -webkit-appearance: none;
  }

  ${props => props.type === "date" && css`
    background: url(https://ik.imagekit.io/aboutUs/KYC/Calendar_WLzo6lSsbl.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1660720585646) no-repeat;
    background-position: right;
    width: 100%;
    border-width: thin;
  `}
`;

const InputsContainer = styled.div`
  margin: 7rem 0 0 0;
`;

const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  border-radius: 1.2rem;
  background: #ffffff;
  margin-bottom: 1.6rem;
`;

const CheckBox = styled.input`
  margin-right: 1.5rem;
`;

const CheckboxText = styled.p`
  color: #7E7E7E;
  font-size: 1.4rem;
`;

export default PersonalDetails;