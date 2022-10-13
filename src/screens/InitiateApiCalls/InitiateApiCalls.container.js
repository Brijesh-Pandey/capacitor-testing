/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useEffect, useState} from "react";

import styled from "styled-components";

import {
  getCvlStatus
} from "api";

import {Spinner} from "../commons";

const InitiateApiCallsContainer = ({
  kycData,
  updateStatus
}) => {

  const[isError, setIsError] = useState(false);
  const[errorText, setErrorText] = useState("");

  const handleApiCall = async () => {
    try {
      const response = await getCvlStatus();
      const result = response.data;
      if (result.stepStatus === "COMPLETE") {
        updateStatus();
      }
      // let status = false
      // if (result.stage === "CVL") {
      //    status = getCvlStatus();
      // }
      // if(status ==="complete"){
      //   getKycStatus()
      // }
    } catch (error) {
      console.log(error);
      setIsError(true);
      setErrorText(error.message);
    } finally {
      console.log("inside finally");
    }
  };

  switch (kycData.stage) {
    case "CVL":
      handleApiCall();
      break;
    default:
      break;
  }

  return (
    <>
    {
      isError ? (
        <h1>
          {errorText}
        </h1>
      ) : (
        <LoaderContainer>
          <Spinner
            color="blue"
            message="Please wait while we fetch corresponding details"
          />
        </LoaderContainer>
      )
      }
    </>
  );
};

const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default InitiateApiCallsContainer;
