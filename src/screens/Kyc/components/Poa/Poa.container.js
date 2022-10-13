/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import Poa from "./Poa";

import PropTypes from "prop-types";

const propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  updateStep: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired
};

const PoaContainer = ({
  formData,
  setFormData,
  updateStep,
  handleFormData
}) => {
  return (
    <Poa
      updateStep={updateStep}
      handleFormData={handleFormData}
    />
  );
};

PoaContainer.propTypes = propTypes;

export default PoaContainer;
