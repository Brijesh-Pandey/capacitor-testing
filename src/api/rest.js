/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

"use strict";

import {
  plainAxios as axios,
  transformedAxios
} from "./axios";

import env from "env";

const ROOT_URL = env.REST_DOMAIN_URL;

const MAPPED_ENDPOINTS = {
  Cvl: "/web/v0/cvl/",
  Status: "/web/v0/status/",
  PanStrictValidation: "/web/v0/pan-strict-validation/",
  Nominee: "/web/v0/nominee/",
  PennyDrop: "/web/v0/penny-drop/",
  FaceMatch: "/web/v0/face-match/",
  SpecimenSign: "/web/v0/specimen-sign/",
  Digilocker: "/web/v0/digilocker/",
  Selfie: "/web/v0/selfie/",
  FrontendWebhook: "/web/v0/frontend-webhook/",                     // This api is to be used when digio sdk is used
  DigioWebhook: "/web/v0/digio-webhook/"
};

const getCvlStatus = () => {
  const endPoint = MAPPED_ENDPOINTS.Cvl;
  const finalUrl = `${ROOT_URL}${endPoint}`;

  return transformedAxios.get(finalUrl)
};

const getKycStatus = () => {
  const endPoint = MAPPED_ENDPOINTS.Status;
  const finalUrl = `${ROOT_URL}${endPoint}`;

  return transformedAxios.get(finalUrl);
};

const updatePennyDrop = (payload) => {
  const endPoint = MAPPED_ENDPOINTS.PennyDrop;
  const finalUrl = `${ROOT_URL}${endPoint}`;

  return transformedAxios.post(finalUrl, payload)
};

const updateNomineeDetails = (payload) => {
  console.log(payload, "from api");
  const endPoint = MAPPED_ENDPOINTS.Nominee;
  const finalUrl = `${ROOT_URL}${endPoint}`;

  return transformedAxios.post(finalUrl, payload);
};

export {
  getCvlStatus,
  getKycStatus,
  updatePennyDrop,
  updateNomineeDetails
}