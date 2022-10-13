/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

"use strict";

let env;

switch (process.env.NODE_ENV) {
  case "development":
    env = {
      REST_DOMAIN_URL: "https://kyc.wealthydev.in",
      GRAPH_URL: "https://graph.buildwealthdev.in/graphql/",
      WEALTHY_WEBSITE_URL: "https://www.wealthydev.in",
      RECAPTCHA_SITE_KEY: "6LfRl6IUAAAAAPiKd9sE2o71nu500AR_keUuh5ZE",
      WEALTHY_CDN_URL: "https://i.wlycdn.com"
    };
    break;

  case "production":
    env = {
      REST_DOMAIN_URL: "https://kyc.wealthy.in",
      GRAPH_URL: "https://graph.buildwealth.in/graphql/",
      WEALTHY_WEBSITE_URL: "https://www.wealthy.in",
      RECAPTCHA_SITE_KEY: "6LcexaIUAAAAAOV6Su0PwphnK0RDaDjpqjpzlH7a",
      WEALTHY_CDN_URL: "https://i.wlycdn.com",
      IS_PRODUCTION: true
    };
    break;

  default:
    env = {
      REST_DOMAIN_URL: "https://kyc.wealthydev.in",
      GRAPH_URL: "https://graph.buildwealthdev.in/graphql/",
      WEALTHY_WEBSITE_URL: "https://www.wealthydev.in",
      RECAPTCHA_SITE_KEY: "6LfRl6IUAAAAAPiKd9sE2o71nu500AR_keUuh5ZE",
      WEALTHY_CDN_URL: "https://i.wlycdn.com",
      IS_LOCAL: true
    };
}

export default env;
