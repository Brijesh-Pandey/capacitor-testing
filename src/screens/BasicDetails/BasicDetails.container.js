/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from "react";

import BasicDetails from "./BasicDetails";

const BasicDetailsContainer = () => {
  const [formData, setFormData] = useState({});

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

  const onSubmit = () => {
    console.log(formData);
  }

  return (
    <BasicDetails
      onChangeHandler={onChangeHandler}
      onSubmit={onSubmit}
    />
  );

};

export default BasicDetailsContainer;
