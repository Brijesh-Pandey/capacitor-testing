/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import React, {useState, useEffect} from "react";

import {
  Camera,
  CameraResultType
} from '@capacitor/camera';

import {defineCustomElements} from '@ionic/pwa-elements/loader';

import CameraComponent from "./Camera";

import {
  checkIsNativeDevice
} from "helpers";

const CameraContainer = ({
  keyName,
  handleFormData
}) => {
  const [image, setImage] = useState(); 
  useEffect(() => {
    if (image?.length > 0) {
      saveImageData();
    }
  }, [image]);

  useEffect(() => {
    handleDeviceCamera();
  }, []);

  const handleDeviceCamera = async () => {
    const isNativeDevice = await checkIsNativeDevice();
    if (!isNativeDevice) {
        defineCustomElements(window);
    }
  };

  const saveImageData = () => {
    handleFormData(keyName, image);
  };

  const takePicture = async () => {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri
    });
    let imageUrl = image.webPath;
    setImage(imageUrl);
  }

  return (
    <CameraComponent
      image={image}
      takePicture={takePicture}
      setImage={setImage}
    />
  );
};

export default CameraContainer;
