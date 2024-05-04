var CryptoJS = require("crypto-js");


export const main = (params) => {
  var ciphertext = CryptoJS.AES.encrypt(params, 'secret key 123').toString();
  var bytes  = CryptoJS.AES.decrypt(ciphertext, 'secret key 123');
  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  return {hash: ciphertext, input:originalText}
  }

