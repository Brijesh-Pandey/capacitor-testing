/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

// TODO: Add env.js and populate the data based on env

const options = {
  environment: "sandbox",
  Is_redirection_approach: true,
  callback: (digioResponse) => console.log(digioResponse, "from config"),
  is_iframe: true,
  logo : "https://i.wlycdn.com/emails/wealthy-logo-email.png",
  theme : {
    primaryColor : "#AB3498",
    secondaryColor : "#000000"
  }
}

export default options;
