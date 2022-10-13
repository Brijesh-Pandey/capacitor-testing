/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from "react";

import NomineeDetails from "./NomineeDetails";

import {updateNomineeDetails} from "api";

const NomineeDetailsContainer = ({updateStatus}) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    relation: ""
  });
  const [nomineeCount, setNomineeCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const nomineeCountChangeHandler = (event) => {
    setNomineeCount(nomineeCount + 1);
  }

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
    try {
      setIsLoading(true);
      const payload = {
        ...formData
      }
      const res = await updateNomineeDetails(payload);
      if (res.status == 200) {
        // console.log("hello");
        updateStatus();

      }
    } catch (error) {
      console.log(error, "error");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <NomineeDetails
      formData={formData}
      isLoading={isLoading}
      onChangeHandler={onChangeHandler}
      onSubmit={onSubmit}
      nomineeCount={nomineeCount}
      setNomineeCount={setNomineeCount}
      nomineeCountChangeHandler={nomineeCountChangeHandler}
    />
  );

};

export default NomineeDetailsContainer;
