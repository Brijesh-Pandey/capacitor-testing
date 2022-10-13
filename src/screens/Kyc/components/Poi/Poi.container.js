/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import Poi from "./Poi";

import PropTypes from "prop-types";

const propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  updateStep: PropTypes.func.isRequired,
  handleFormData: PropTypes.func.isRequired
};

const PoiContainer = ({
  formData,
  setFormData,
  updateStep,
  handleFormData
}) => {
  return (
    <Poi
      updateStep={updateStep}
      handleFormData={handleFormData}
    />
  );
};

PoiContainer.propTypes = propTypes;

export default PoiContainer;
