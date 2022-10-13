/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useEffect, useState} from "react";

import {
  getKycStatus
} from "api"

import KycScreenMapping from "types";

import {
  BankDetails,
  NomineeDetails,
  DigioFlow,
  InitiateApiCalls
} from "./screens";

import {Spinner} from "./screens/commons";

import styled from "styled-components";

const App = () => {
  const [kycData, setKycData] = useState({
    status: "incomplete",
    stage: "",
    flow: "mf"
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    updateStatus();
  }, []);

  const updateStatus = async () => {
    try {
      setIsLoading(true);
      const response = await getKycStatus();
      const result = response.data;
      console.log(kycData, "from app");
      setKycData({
        ...kycData,
        ...result
      });
    } catch (error) {
      // handleApiError();
      console.log(error);
    } finally {
      setIsLoading(false);
    }

  };

  const kycComponentMapping = {
    "SELFIE": "Selfie",
    "FACE_MATCH": "FaceMatch",
    "E_SIGN": <DigioFlow kycData={kycData} />,
    "SPECIMEN_SIGN": "SPECIMEN_SIGN",
    "DIGILOCKER_PULL": <DigioFlow kycData={kycData} />,
    "PAN_STRICT_VALIDATION": "PanStrictValidation",
    "NOMINEE": <NomineeDetails kycData={kycData} updateStatus={updateStatus} />,
    "PENNY_DROP": <BankDetails kycData={kycData} updateStatus={updateStatus} />
  };

  let component = "";

  switch (kycData.stage) {
    case KycScreenMapping[kycData.stage]:
      component = kycComponentMapping[KycScreenMapping[kycData.stage]];
      break;
    default:
      component = <InitiateApiCalls kycData={kycData} updateStatus={updateStatus} />
      break;
  };

  return (
    <ComponentsWrapper>
      {
        isLoading ? (
          <LoaderContainer>
            <Spinner
              color="blue"
              message="Please wait while we fetch your kyc status"
            />
          </LoaderContainer>
        ) : (component)
      }
      {/* <Kyc /> */}
      {/* <DigioFlow /> */}
      {/* <Facefinder /> */}
      {/* <BasicDetails /> */}
      {/* <PersonalDetails /> */}
      {/* <Otp /> */}
      {/* <SuccessScreen /> */}
      {/* <BankDetails /> */}
      {/* <NomineeDetails /> */}
      {/* <ReviewDetails /> */}
      {/* {component} */}
    </ComponentsWrapper>
  );
};

const ComponentsWrapper = styled.div`
  .custom-ion-page {
    overflow: auto;
  }
`;

const LoaderContainer = styled.div`
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;


export default App;
