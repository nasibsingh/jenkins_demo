"use strict";

var _crypto = _interopRequireDefault(require("crypto"));

var _config = _interopRequireDefault(require("../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ENCRYPTION_KEY = _config["default"].encryptionKey; // Must be 256 bits (32 characters)

var IV_LENGTH = 16; // For AES, this is always 16

var ALGO = 'aes-256-gcm';

var encrypt = function encrypt(text) {
  // random initialization vector
  var iv = _crypto["default"].randomBytes(IV_LENGTH); // random salt


  var salt = _crypto["default"].randomBytes(64); // derive encryption key: 32 byte key length
  // in assumption the masterkey is a cryptographic and NOT a password there is no need for
  // a large number of iterations. It may can replaced by HKDF
  // the value of 2145 is randomly chosen!


  var key = _crypto["default"].pbkdf2Sync(ENCRYPTION_KEY, salt, 2145, 32, 'sha512'); // AES 256 GCM Mode


  var cipher = _crypto["default"].createCipheriv(ALGO, key, iv); // encrypt the given text


  var encrypted = Buffer.concat([cipher.update(text, 'utf8'), cipher["final"]()]); // extract the auth tag

  var tag = cipher.getAuthTag(); // generate output

  return Buffer.concat([salt, iv, tag, encrypted]).toString('base64');
};

var decrypt = function decrypt(encData) {
  // base64 decoding
  var bData = Buffer.from(encData, 'base64'); // convert data to buffers

  var salt = bData.slice(0, 64);
  var iv = bData.slice(64, 80);
  var tag = bData.slice(80, 96);
  var text = bData.slice(96); // derive key using; 32 byte key length

  var key = _crypto["default"].pbkdf2Sync(ENCRYPTION_KEY, salt, 2145, 32, 'sha512'); // AES 256 GCM Mode


  var decipher = _crypto["default"].createDecipheriv(ALGO, key, iv);

  decipher.setAuthTag(tag); // decrypt the given text

  var decrypted = decipher.update(text, 'binary', 'utf8') + decipher["final"]('utf8');
  return decrypted.toString();
};

module.exports = {
  encrypt: encrypt,
  decrypt: decrypt
};