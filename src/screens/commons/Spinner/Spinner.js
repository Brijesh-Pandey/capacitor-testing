/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

"use strict";

import React from "react";

import styled from "styled-components";
import PropTypes from "prop-types";

import spinnerWhite from "./assets/spinnerWhite.svg";
import spinnerBlue from "./assets/spinnerBlue.svg";

const propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  message: PropTypes.string
};

const Spinner = ({
  className,
  color,
  message
}) => {
  return (
    <Wrapper>
      <Img
        alt="Loading"
        className={className || ""}
        src={color === "blue" ? spinnerBlue : spinnerWhite}
      />
      <Message>{message}</Message>
    </Wrapper>
  )
};

const Img = styled.img`
  height: 15px;
  width: 2.6rem;
  transform: scale(1.8);
  position: relative;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Message = styled.div`
  font-size: 1.8rem;
  font-family: MavenPro;
  font-weight: 500;
  line-height: 1.2;
`;

const Wrapper = styled.div``;

Spinner.propTypes = propTypes;

export default Spinner;
