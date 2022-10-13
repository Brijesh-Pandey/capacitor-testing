/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

// Add environment variable for device testing,
// call defineCustomElements() for web devices

import React from "react";

import Selfie from "./Selfie";


const SelfieContainer = ({
  formData,
  setFormData,
  updateStep,
  handleFormData
}) => {
  return (
    <Selfie
      updateStep={updateStep}
      handleFormData={handleFormData}
    />
  );
};

export default SelfieContainer;
