/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState} from "react";

import Otp from "./Otp";

const OtpContainer = () => {
  const [otp, setOtp] = useState([]);


  const onKeyUpHandler = (keyCode, previousElement, currentElement, nextElement) => {
    if ((keyCode === 8 || keyCode === 46) && previousElement !== -1) {
      document.getElementById(previousElement).focus();
    }

    if (currentElement.value.length) {
      document.getElementById(nextElement).focus();
    }
  };

  const onOtpChangeHandler = (event) => {
    const otpInputs = Array.from(document.querySelectorAll(".otp-input"));
    const {
      value,
      dataset: {index}
    } = event.target;

    const newOtp = otp.slice();
    newOtp[index] = value;
    setOtp(newOtp);

    const nextIndex = +index + 1;
    if (value && otpInputs[nextIndex]) {
      otpInputs[nextIndex].select();
    } else if (value && !otpInputs[nextIndex]) {
      event.target.blur();
    }
  };

  const onSubmit = () => {
    console.log(otp);
  }

  return (
    <Otp
      onKeyUpHandler={onKeyUpHandler}
      onOtpChangeHandler={onOtpChangeHandler}
      onSubmit={onSubmit}
    />
  );
};

export default OtpContainer;
