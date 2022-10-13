/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled from "styled-components";

import {
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel
} from '@ionic/react';

const Summary = ({
  updateStep,
  formData,
  signatureImageCanvas
}) => {
  const userInputData = formData?.userData;

  const content = Object.keys(userInputData).map((key) => {
    return (
      <RowContainer
        className="ion-padding"
        slot="content"
      >
        <KeyTitle>{key}</KeyTitle>
        {
          key === "signature" ? (
            <Image
              alt="your signature"
              className="ion-padding sign-image"
              slot="content"
              ref={signatureImageCanvas}
              src={userInputData[key]}
            />
          ) : (
            <Value>{userInputData[key]}</Value>
          )
        }
      </RowContainer>
    );
  })


  return (
    <Wrapper>
      <Title>Please review and submit the details</Title>

      <IonAccordionGroup>
      <IonAccordion value="first">
        <IonItem slot="header" color="light">
          <IonLabel>Your Picture</IonLabel>
        </IonItem>
        <Image
          alt="selfie"
          className="ion-padding"
          slot="content"
          src={formData.selfie}
        />
      </IonAccordion>
      <IonAccordion value="second">
        <IonItem slot="header" color="light">
          <IonLabel>Your proof of identity</IonLabel>
        </IonItem>
        <Image
          alt="proof of identity"
          className="ion-padding"
          slot="content"
          src={formData.poi}
        />
      </IonAccordion>
      <IonAccordion value="third">
        <IonItem slot="header" color="light">
          <IonLabel>Your proof of address</IonLabel>
        </IonItem>
        <Image
          alt="proof of address"
          className="ion-padding"
          slot="content"
          src={formData.poa}
        />
      </IonAccordion>
      <IonAccordion value="fourth">
        <IonItem slot="header" color="light">
          <IonLabel>Perosonal information</IonLabel>
        </IonItem>
        {content}
      </IonAccordion>

    </IonAccordionGroup>

      <SubmitButton onClick={() => updateStep(6)}>
        Submit
      </SubmitButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sign-image {
    width: 20%;
    padding: 0;
  }
`;

const SubmitButton = styled.div`
  background-color: #6725F4;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.4rem;
  color: #ffffff;
  height: 5.2rem;
  font-size: 1.8rem;
  margin-top: 5rem;
`;

const Title = styled.h2`
  margin: 0 auto;
  text-align: center;
  font-size: 1.8rem;
  color: #7E7E7E;
  margin: 2rem 0;
`;

const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const KeyTitle = styled.p`
  font-size: 1.4rem;
`;

const Value = styled.p`
  font-size: 1.4rem;
`;

const Image = styled.img``;

export default Summary;
