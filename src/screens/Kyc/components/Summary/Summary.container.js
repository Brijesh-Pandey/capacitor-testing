/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import Summary from "./Summary"

const SummaryContainer = ({
  formData,
  updateStep
}) => {
  return (
    <Summary
      formData={formData}
      updateStep={updateStep}
    />
  );
};

export default SummaryContainer;
