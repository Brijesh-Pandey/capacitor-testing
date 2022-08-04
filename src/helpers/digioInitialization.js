/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/

import options from "./digioConfiguration";

const digioInitialization = (
  requestId,
  identifier,
  tokenId
) => {
  const digio = new window.Digio(options);
  digio.init();
  const resp = digio.submit(requestId, identifier, tokenId);
  console.log(resp);
  // digio.cancel();
}

export default digioInitialization;
