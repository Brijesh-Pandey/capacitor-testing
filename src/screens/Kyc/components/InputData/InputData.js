/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled from "styled-components";

import SignatureCanvas from "react-signature-canvas";

import {
  IonLabel,
  IonItem,
  IonInput
} from '@ionic/react';

const InputData = ({
  userData,
  handleUserInput,
  handleSubmitUserData,
  signatureRef
}) => {
  return (
    <Wrapper>
      <Title>Please fill out the following details</Title>

    <IonItem>
      <IonLabel
        color="dark"
        position="floating"
      >
        Name
      </IonLabel>
      <IonInput
        name="name"
        value={userData.name}
        onIonChange={handleUserInput}
      />
    </IonItem>

    <IonItem>
      <IonLabel
        color="dark"
        position="floating"
      >
        Account Number
      </IonLabel>
      <IonInput
        type="number"
        name="accountNumber"
        value={userData.accountNumber}
        onIonChange={handleUserInput}
      />
    </IonItem>

    <IonItem>
      <IonLabel
        color="dark"
        position="floating"
      >
        IFSC Code
      </IonLabel>
      <IonInput
        name="ifscCode"
        value={userData.ifscCode}
        onIonChange={handleUserInput}
      />
    </IonItem>

    <IonItem>
      <IonLabel
        color="dark"
        position="floating"
      >
        Address
      </IonLabel>
      <IonInput
        name="address"
        value={userData.address}
        onIonChange={handleUserInput}
      />
    </IonItem>

    <IonLabel className="sign-text">Please Sign Here</IonLabel>
    <SignatureContainer>
      <SignatureCanvas
        penColor="black"
        canvasProps={{className: "signature-canvas"}}
        ref={signatureRef}
      />
    </SignatureContainer>

      <NextButton
        onClick={handleSubmitUserData}
      >
        Next
      </NextButton>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .sign-text {
    font-size: 1.6rem;
    opacity: 0.75;
    display: flex;
    margin-left: 1.4rem;
    margin-top: 4rem;
  }
`;

const SignatureContainer = styled.div`
  background: #d7d7d7;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem auto;
  border-radius: 1rem;

  .signature-canvas {
    width: 100%;
    min-height: 300px;
  }
`;

const NextButton = styled.div`
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

export default InputData;
