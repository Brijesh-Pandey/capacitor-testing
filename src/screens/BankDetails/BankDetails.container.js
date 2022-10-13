/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from "react";

import BankDetails from "./BankDetails";

import {
  updatePennyDrop
} from "api";

const BankDetailsContainer = ({
  kycData,
  updateStatus
}) => {
  const [formData, setFormData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  console.log(kycData, "from bank")

  const onChangeHandler = (event) => {
    const {
      name,
      value
    } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const onSubmit = async () => {
    console.log(formData, "on Submit");

    try {
      setIsLoading(true);
      const payload = {
        ...formData
      };
      const res = await updatePennyDrop(payload);
      console.log(res, "post penny");
      if (res.status == 200) {
        updateStatus();
      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BankDetails
      formData={formData}
      isLoading={isLoading}
      onChangeHandler={onChangeHandler}
      onSubmit={onSubmit}
    />
  );

};

export default BankDetailsContainer;
