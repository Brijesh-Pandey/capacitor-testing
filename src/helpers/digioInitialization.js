/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import options from "./digioConfiguration";

const digioInitialization = ({
  requestId,
  identifier,
  tokenId
}) => {
  const digio = new Digio(options);
  digio.init();
  digio.submit(requestId, identifier, tokenId);
}

export default digioInitialization;
