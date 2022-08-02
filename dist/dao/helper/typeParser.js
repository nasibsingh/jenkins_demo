"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parserJson = exports.parserInteger = exports.parserId = exports.parserFloat = exports.parserDate = exports.parserBoolean = void 0;

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var parserId = function parserId(id) {
  return id ? parseInt(id, 10) : null;
};

exports.parserId = parserId;

var parserDate = function parserDate(date) {
  return date ? (0, _moment["default"])(date) : null;
};

exports.parserDate = parserDate;

var parserBoolean = function parserBoolean(value) {
  return !!value;
};

exports.parserBoolean = parserBoolean;

var parserInteger = function parserInteger(value) {
  return value !== null && value !== undefined ? parseInt(value, 10) : null;
};

exports.parserInteger = parserInteger;

var parserFloat = function parserFloat(value) {
  return value !== null && value !== undefined ? parseFloat(value, 10) : null;
};

exports.parserFloat = parserFloat;

var parserJson = function parserJson(value) {
  if (!value) return null;

  try {
    return JSON.parse(value);
  } catch (error) {
    console.log('Error parsing Json: ', error);
    return null;
  }
};

exports.parserJson = parserJson;