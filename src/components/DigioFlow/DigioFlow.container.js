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
    requestId: "KID2208101342120023ICGYK86INA6IF",
    identifier: "brijeshpandey18@gmail.com",
    tokenId: "GWT220810134212021LQSWLNCWHHOFBV"
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
