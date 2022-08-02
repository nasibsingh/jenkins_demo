"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomUserSalt = exports.randomString = exports.randomPasswordGenerator = exports.randomNumber = exports.pad = void 0;

var _md = _interopRequireDefault(require("md5"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var pad = function pad(number, length) {
  var padder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '0';
  var newNumber = "".concat(number);
  newNumber = newNumber.length >= length ? newNumber : new Array(length - newNumber.length + 1).join(padder) + newNumber;
  return newNumber;
};

exports.pad = pad;

var randomNumber = function randomNumber() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 6;
  var min = 0;
  var max = parseInt(new Array(length + 1).join('9') || '0', 10);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return pad(random, length);
};

exports.randomNumber = randomNumber;

var randomString = function randomString() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 11;
  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var result = '';

  for (var i = length; i > 0; --i) {
    result += chars[Math.floor(Math.random() * chars.length)];
  }

  return result;
};

exports.randomString = randomString;

var randomPasswordGenerator = function randomPasswordGenerator() {
  var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 11;
  var string = randomString(length);
  var md5String = (0, _md["default"])(string);
  return {
    string: string,
    md5String: md5String
  };
};

exports.randomPasswordGenerator = randomPasswordGenerator;

var randomUserSalt = function randomUserSalt() {
  return randomString(32);
};

exports.randomUserSalt = randomUserSalt;