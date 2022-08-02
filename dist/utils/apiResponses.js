"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.messageResponse = exports.joiStringError = exports.joiNumberError = exports.joiGeneralError = exports.joiEmailError = exports.joiDateError = exports.joiBooleanError = exports.formatSuccessResponse = exports.formatResponse = exports.formatErrorResponse = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formatResponse = function formatResponse(api, type, message) {
  return "".concat(type, ".").concat(api, ".").concat(message);
};

exports.formatResponse = formatResponse;

var formatSuccessResponse = function formatSuccessResponse(api, message) {
  return formatResponse(api, 'success', message);
};

exports.formatSuccessResponse = formatSuccessResponse;

var formatErrorResponse = function formatErrorResponse(api, message) {
  return formatResponse(api, 'error', message);
};

exports.formatErrorResponse = formatErrorResponse;

var messageResponse = function messageResponse(message) {
  return {
    message: message || null
  };
};

exports.messageResponse = messageResponse;

var joiGeneralError = function joiGeneralError(schema, field) {
  var invalid = formatErrorResponse(schema, "".concat(field, ".invalid"));
  return {
    'any.required': formatErrorResponse(schema, "".concat(field, ".required")),
    'any.only': invalid,
    'any.invalid': invalid,
    'array.unique': invalid,
    'array.base': formatErrorResponse(schema, "".concat(field, ".invalidArray")),
    'array.includesRequiredUnknowns': formatErrorResponse(schema, "".concat(field, ".emptyArray"))
  };
};

exports.joiGeneralError = joiGeneralError;

var joiStringError = function joiStringError(schema, field) {
  var invalid = formatErrorResponse(schema, "".concat(field, ".invalid"));
  return _objectSpread({
    'string.base': invalid,
    'string.empty': formatErrorResponse(schema, "".concat(field, ".empty")),
    'string.length': invalid,
    'string.pattern.base': invalid,
    'string.domain': invalid
  }, joiGeneralError(schema, field));
};

exports.joiStringError = joiStringError;

var joiEmailError = function joiEmailError(schema, field) {
  return _objectSpread(_objectSpread({}, joiStringError(schema, field)), {}, {
    'string.email': formatErrorResponse(schema, "".concat(field, ".invalid"))
  });
};

exports.joiEmailError = joiEmailError;

var joiNumberError = function joiNumberError(schema, field) {
  var invalid = formatErrorResponse(schema, "".concat(field, ".invalid"));
  return _objectSpread(_objectSpread({}, joiGeneralError(schema, field)), {}, {
    'number.base': invalid,
    'number.positive': invalid,
    'number.integer': invalid,
    'number.min': invalid,
    'number.max': invalid
  });
};

exports.joiNumberError = joiNumberError;

var joiBooleanError = function joiBooleanError(schema, field) {
  var invalid = formatErrorResponse(schema, "".concat(field, ".invalid"));
  return _objectSpread(_objectSpread({}, joiGeneralError(schema, field)), {}, {
    'boolean.base': invalid
  });
};

exports.joiBooleanError = joiBooleanError;

var joiDateError = function joiDateError(schema, field) {
  var invalid = formatErrorResponse(schema, "".concat(field, ".invalid"));
  return _objectSpread(_objectSpread({}, joiGeneralError(schema, field)), {}, {
    'date.base': invalid,
    'date.format': invalid,
    'date.max': invalid,
    'date.min': invalid
  });
};

exports.joiDateError = joiDateError;