/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, { useEffect } from "react";

import { digioInitialization } from "helpers";

import DigioFlow from "./DigioFlow";

const DigioFlowContainer = () => {
  useEffect(() => {
    handleDigioInitialization();
  }, []);

  const kycData = {
    requestId: "KID221013161506033DOYEH9WK9U59UL",
    identifier: "ibhatia1998@gmail.com",
    tokenId: "GWT2210131615060796KNULH2FISY9S1"
  };

  const handleDigioInitialization  = () => {
    digioInitialization(kycData.requestId, kycData.identifier, kycData.tokenId);
  };

  return (
    <DigioFlow

    />
  );
};

export default DigioFlowContainer;
