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
    requestId: "KID220809115850458MYSPFI64YJHNBO",
    identifier: "brijeshpandey18@gmail.com",
    tokenId: "GWT220809115850502BOE4UUD1AUJ77U"
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
