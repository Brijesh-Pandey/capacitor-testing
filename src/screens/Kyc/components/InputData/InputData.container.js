/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useEffect, useState, useRef} from "react";

import InputData from "./InputData";

const InputDataContainer = ({
  formData,
  updateStep,
  handleFormData
}) => {
  const [userData, setUserData] = useState({
    name: "",
    accountNumber: "",
    ifscCode: "",
    address: "",
    signature: ""
  });

  const signatureRef = useRef();

  useEffect(() => {
    if (signatureRef.current && !signatureRef.current.isEmpty()) {
      handleFormData("userData", userData);
      updateStep(5);
    }
  }, [userData]);

  const handleUserInput = (event) => {
    const {
      name,
      value
    } = event.target;

    setUserData({
      ...userData,
      [name]: value
    })
  };

  const handleSubmitUserData = () => {
    if (signatureRef.current.isEmpty()) {
      return;
    } else {
      setUserData({
        ...userData,
        signature: signatureRef.current.toDataURL("image/png", 1)
      });
    }
  };

  return (
    <InputData
      updateStep={updateStep}
      userData={userData}
      handleUserInput={handleUserInput}
      handleSubmitUserData={handleSubmitUserData}
      signatureRef={signatureRef}
    />
  );
};

export default InputDataContainer;
