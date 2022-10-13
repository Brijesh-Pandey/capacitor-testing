/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React from "react";

import styled from "styled-components";

const Thankyou = () => {
  return (
    <Wrapper>
      <Title>Thankyou for doing your KYC</Title>
      <AnimationContainer>
        <div className="wrapper">
          <svg
            className="checkmark"
          >
            <circle className="checkmark-circle" cx={26} cy={26} fill="none" r={25} />
            <path
              className="checkmark-check"
              d="M14.1 27.2l7.1 7.2 16.7-16.8"
              fill="none"
            />
          </svg>
        </div>
      </AnimationContainer>
      <Content>Culpa labore non ad ad labore sit reprehenderit fugiat commodo nisi eu voluptate esse. Sunt veniam ex tempor labore. Ad irure veniam.</Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 70vh;
  background: #f2f2f2;
  overflow: hidden;
  border-radius: 20px;
  cursor: pointer;
  box-shadow: 0 0 20px 8px #d0d0d0;
  padding: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.p`
  font-size: 2.4rem;
  color: #000000;
  display: flex;
  justify-content: center;
`;

const AnimationContainer = styled.div`
  margin: 5rem 0;

  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .checkmark-circle {
    stroke-dasharray: 166;
    stroke-dashoffset: 166;
    stroke-width: 2;
    stroke-miterlimit: 10;
    stroke: #7ac142;
    fill: none;
    animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards
  }

  .checkmark {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    display: block;
    stroke-width: 2;
    stroke: #fff;
    stroke-miterlimit: 10;
    margin: 10% auto 0;
    box-shadow: inset 0px 0px 0px #7ac142;
    animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both
  }

  .checkmark-check {
    transform-origin: 50% 50%;
    stroke-dasharray: 48;
    stroke-dashoffset: 48;
    animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards
  }

  @keyframes stroke {
    100% {
      stroke-dashoffset: 0
    }
  }

  @keyframes scale {
    0%,
    100% {
      transform: none
    }

    50% {
      transform: scale3d(1.1, 1.1, 1)
    }
  }

  @keyframes fill {
    100% {
      box-shadow: inset 0px 0px 0px 30px #7ac142
    }
  }
`;

const Content = styled.p`
  text-align: center;
  font-size: 1.8rem;
  color: #7E7E7E;
  width: 85%;
  margin: 0 auto;
`;

export default Thankyou;
