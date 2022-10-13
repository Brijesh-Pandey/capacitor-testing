/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

"use strict";

import axios from "axios";
import humps from "humps";
import Cookies from "js-cookie";
import {ACCESS_TOKEN_COOKIE_KEY} from "constants/cookie";

// axios.defaults.headers.post["Content-Type"] = "application/json";
// axios.defaults.headers.common["X-APP-VERSION"] = "kyc-web";

const plainAxios = axios.create({});
const transformedAxios = axios.create({});

plainAxios.interceptors.request.use(config => {
  config.headers.Authorization = Cookies.get(ACCESS_TOKEN_COOKIE_KEY);
  return config;
}, (error) => {
  return Promise.reject(error);
});

transformedAxios.interceptors.request.use(config => {
  config.headers.Authorization = Cookies.get(ACCESS_TOKEN_COOKIE_KEY);
  return config;
}, (error) => {
  return Promise.reject(error);
});

transformedAxios.defaults.transformResponse = [
  ...axios.defaults.transformResponse,
  data => humps.camelizeKeys(data)
];

transformedAxios.defaults.transformRequest = [
  data => humps.decamelizeKeys(data),
  ...axios.defaults.transformRequest
];

export {
  plainAxios,
  transformedAxios
};
