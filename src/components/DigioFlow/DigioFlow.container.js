/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useEffect} from "react";

import {digioInitialization} from "helpers";

import DigioFlow from "./DigioFlow";

const DigioFlowContainer = () => {
  useEffect(() => {
    handleDigioInitialization();
  }, []);

  const kycData = {
    requestId: "KID220804130946510V8631I6CWN3W4G",
    identifier: "brijeshpandey18@gmail.com",
    tokenId: "GWT22080413094652833CMUPFSU9N3TX"
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
