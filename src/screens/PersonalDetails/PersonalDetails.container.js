/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState, useEffect} from "react";

import {ConnectWithWealthPartner} from "./components";

import PersonalDetails from "./PersonalDetails";

const checkField = [{
  name: "I am not a political exposed person"
},
{
  name: "I am a citizen & resident of India"
},
{
  name: "I don't have tax obligations outside India"
}];

const PersonalDetailsContainer = () => {
  const [formData, setFormData] = useState({});
  const [checkedState, setCheckedState] = useState(
    new Array(checkField.length).fill(true)
  );
  const [activeComponent, setActiveComponent] = useState();

  useEffect(() => {
    setActiveComponent(<PersonalDetails
      checkField={checkField}
      checkedState={checkedState}
      formData={formData}
      onChangeHandler={onChangeHandler}
      onSubmit={onSubmit}
      handleOnCheckboxChange={handleOnCheckboxChange}
    />)
  }, [checkedState]);

  const isNotCheckedIndex = checkedState.findIndex((item) => item === false);
  const isChecked = isNotCheckedIndex === -1;

  const handleOnCheckboxChange = (position) => {
    const updatedCheckedState = checkedState.map((checked, index) =>
      index === position ? !checked : checked
    );
    setCheckedState(updatedCheckedState);
  };

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
    console.log(formData, isChecked, "hey")
    if (!isChecked) {
      setActiveComponent(
        <ConnectWithWealthPartner />
      )

    }
  };

  return (activeComponent);

};

export default PersonalDetailsContainer