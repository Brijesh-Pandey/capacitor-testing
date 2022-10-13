/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled from "styled-components";

import PropTypes from "prop-types";

import {
  IonPage,
  IonProgressBar
} from '@ionic/react';

import {
  Selfie,
  Poi,
  Poa,
  InputData,
  Summary,
  Thankyou
} from "./components"

const propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
  updateStep: PropTypes.func.isRequired
}

const Kyc = ({
  formData,
  setFormData,
  step,
  updateStep,
  handleFormData
}) => {
  let activeComponent;

  switch (step) {
    case 1:
      activeComponent = (
        <Selfie
          updateStep={updateStep}
          setFormData={setFormData}
          formData={formData}
          handleFormData={handleFormData}
        />
      )
    break;

    case 2:
      activeComponent = (
        <Poi
          updateStep={updateStep}
          setFormData={setFormData}
          formData={formData}
          handleFormData={handleFormData}
        />
      )
    break;

    case 3:
      activeComponent = (
        <Poa
          updateStep={updateStep}
          setFormData={setFormData}
          formData={formData}
          handleFormData={handleFormData}
        />
      )
    break;

    case 4:
      activeComponent = (
        <InputData
          updateStep={updateStep}
          formData={formData}
          handleFormData={handleFormData}
        />
      )
    break;

    case 5:
      activeComponent = (
        <Summary
          updateStep={updateStep}
          formData={formData}
          setFormData={setFormData}
        />
      )
    break;

    case 6:
      activeComponent = (
        <Thankyou />
      )
    break;

    default:
      activeComponent = (
        <Selfie
          updateStep={updateStep}
          setFormData={setFormData}
          formData={formData}
          handleFormData={handleFormData}
        />
      )
    break;
  }

  return (
    <IonPage className="custom-ion-page">
      <Wrapper>
        {
          !(step === 6) && (
            <>
              <Title>KYC Flow</Title>
              <SubHeader>Complete your kyc in 5 easy steps with us.</SubHeader>
              <IonProgressBar color="primary" value={0.2 * step} />
            </>
          )
        }
        {activeComponent}
      </Wrapper>
    </IonPage>
  );
}

const Wrapper = styled.div`
  padding: 5rem 0;
  width: 85%;
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Title = styled.h1`
  font-size: 2.4rem;
  text-align: center;
  margin: 0;
  padding: 0;
  color: #000000;
`;

const SubHeader = styled.h2`
  margin: 0 auto;
  text-align: center;
  font-size: 1.8rem;
  color: #7E7E7E;
  margin: 2rem 0;
`;

Kyc.propTypes = propTypes;

export default Kyc;
