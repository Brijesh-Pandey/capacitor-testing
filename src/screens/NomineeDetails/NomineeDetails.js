/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled from "styled-components";

import NomineeForm from "./components";

const BankDetails = ({
  onChangeHandler,
  onSubmit,
  formData,
  isLoading,
  nomineeCount,
  nomineeCountChangeHandler
}) => {
  return (
    <NomineeDetailsWrapper>
      {
        <NomineeForm
          formData={formData}
          isLoading={isLoading}
          nomineeCount={nomineeCount}
          onChangeHandler={onChangeHandler}
          onSubmit={onSubmit}
          nomineeCountChangeHandler={nomineeCountChangeHandler}
        />
      }
    </NomineeDetailsWrapper>
  )
};

const NomineeDetailsWrapper = styled.div`
  background: #F6F5F1;
  height: 100vh;
  width: 100%;
  scroll-behavior: scroll;
  position: relative;
  overflow-y: scroll;
`;


export default BankDetails;
