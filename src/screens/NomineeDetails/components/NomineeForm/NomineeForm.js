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

const NomineeForm = ({
  formData,
  isLoading,
  onChangeHandler,
  onSubmit,
  nomineeCountChangeHandler,
  nomineeCount
}) => {
  return (

    <Container>
        <BackButton />
        <Title>Nominee Details</Title>
        <SubHeader>Add person as nominee for all investments</SubHeader>
        <NomineeNumber>Nominee {nomineeCount}</NomineeNumber>
        <InputsContainer>
          <InputContainer>
            <Label>Full Name</Label>
            <Input
              name="name"
              value={formData.name}
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

          <InputContainer>
            <Label>Relation</Label>
            <Input
              name="relation"
              value={formData.relation}
              onChange={onChangeHandler}
            />
          </InputContainer>

          {/* {
            nomineeCount < 3 && (
              <AddNominee
                onClick={nomineeCountChangeHandler}
              >
                Add Another Nominee
              </AddNominee>
            )
          } */}

          <ActionButton
            buttonText="Confirm"
            callback={onSubmit}
            isLoading={isLoading}
          />

        </InputsContainer>
      </Container>

  );
};


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

const NomineeNumber = styled.p`
  color: #1C1C1C;
  font-size: 1.4rem;
  font-family: MavenPro;
  font-weight: 400;
  margin-top: 6.4rem;
`;

const AddNominee = styled.p`
  text-align: center;
  color: #6725F4;
  font-size: 1.6rem;
  margin: 2rem 0;
  font-weight: 500;
  font-family: MavenPro;
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

export default NomineeForm;