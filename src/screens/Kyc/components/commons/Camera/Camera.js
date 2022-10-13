/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/


import React from "react";

import {
  IonButton,
  IonImg
} from "@ionic/react";

import styled from "styled-components";

const Camera = ({
  image,
  takePicture
}) => {
  return (
    <Wrapper>
      <IonButton
        color="primary"
        onClick={() => takePicture()}
      >
        Take Photo
      </IonButton>
      <IonImg
        className="image-container"
        src={image}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2rem auto;
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;

  .image-container {
    width: 300px;
    height: 300px;
    margin: 2rem auto;
  }
`;

export default Camera;
