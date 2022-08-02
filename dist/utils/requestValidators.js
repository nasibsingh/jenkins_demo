"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateEndDate = exports.stringValidator = exports.requiredStringValidator = exports.requiredRegexValidator = exports.requiredNumberValidator = exports.requiredMoneyValidator = exports.requiredIdValidator = exports.requiredEnumValidator = exports.requiredEmailValidator = exports.requiredDateValidator = exports.requiredBooleanValidator = exports.regexValidator = exports.numberValidator = exports.nullableStringValidator = exports.nullableRegexValidator = exports.nullableNumberValidator = exports.nullableMoneyValidator = exports.nullableIdValidator = exports.nullableEnumValidator = exports.nullableEmailValidator = exports.nullableDateValidator = exports.moneyValidator = exports.idValidator = exports.enumValidator = exports.emailValidator = exports.dateValidator = exports.booleanValidator = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _moment = _interopRequireDefault(require("moment"));

var _apiResponses = require("./apiResponses");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var idValidator = function idValidator() {
  return _joi["default"].number().integer().positive();
};

exports.idValidator = idValidator;

var requiredIdValidator = function requiredIdValidator(messageKey, key) {
  return idValidator().required().messages((0, _apiResponses.joiNumberError)(messageKey, key));
};

exports.requiredIdValidator = requiredIdValidator;

var nullableIdValidator = function nullableIdValidator(messageKey, key) {
  return idValidator().allow(null).messages((0, _apiResponses.joiNumberError)(messageKey, key));
};

exports.nullableIdValidator = nullableIdValidator;

var moneyValidator = function moneyValidator() {
  return _joi["default"].number().positive().precision(2);
};

exports.moneyValidator = moneyValidator;

var requiredMoneyValidator = function requiredMoneyValidator(messageKey, key) {
  return moneyValidator().required().messages((0, _apiResponses.joiNumberError)(messageKey, key));
};

exports.requiredMoneyValidator = requiredMoneyValidator;

var nullableMoneyValidator = function nullableMoneyValidator(messageKey, key) {
  return moneyValidator().allow(null).messages((0, _apiResponses.joiNumberError)(messageKey, key));
};

exports.nullableMoneyValidator = nullableMoneyValidator;

var stringValidator = function stringValidator(messageKey, key) {
  return _joi["default"].string().messages((0, _apiResponses.joiStringError)(messageKey, key));
};

exports.stringValidator = stringValidator;

var requiredStringValidator = function requiredStringValidator(messageKey, key) {
  return _joi["default"].string().required().messages((0, _apiResponses.joiStringError)(messageKey, key));
};

exports.requiredStringValidator = requiredStringValidator;

var nullableStringValidator = function nullableStringValidator(messageKey, key) {
  return _joi["default"].string().allow(null).messages((0, _apiResponses.joiStringError)(messageKey, key));
};

exports.nullableStringValidator = nullableStringValidator;

var dateValidator = function dateValidator() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      onlyPast = _ref.onlyPast;

  var validator = _joi["default"].date().iso().raw();

  if (onlyPast) {
    validator = validator.max('now');
  }

  return validator;
};

exports.dateValidator = dateValidator;

var requiredDateValidator = function requiredDateValidator(messageKey, key, options) {
  return dateValidator(options).required().messages((0, _apiResponses.joiDateError)(messageKey, key));
};

exports.requiredDateValidator = requiredDateValidator;

var nullableDateValidator = function nullableDateValidator(messageKey, key, options) {
  return dateValidator(options).allow(null).messages((0, _apiResponses.joiDateError)(messageKey, key));
};

exports.nullableDateValidator = nullableDateValidator;

var validateEndDate = function validateEndDate(startDateKey) {
  return function (value, helpers) {
    var startDate;

    if (helpers && helpers.state && helpers.state.ancestors && helpers.state.ancestors[0]) {
      startDate = helpers.state.ancestors[0][startDateKey];
    }

    if (startDate && !value) {
      return helpers.error('any.invalid');
    }

    if (startDate && value && (0, _moment["default"])(startDate).isAfter((0, _moment["default"])(value))) {
      return helpers.error('any.invalid');
    }

    return value;
  };
};

exports.validateEndDate = validateEndDate;

var emailValidator = function emailValidator() {
  return _joi["default"].string().lowercase().email();
};

exports.emailValidator = emailValidator;

var requiredEmailValidator = function requiredEmailValidator(messageKey, key) {
  return emailValidator().required().messages((0, _apiResponses.joiEmailError)(messageKey, key));
};

exports.requiredEmailValidator = requiredEmailValidator;

var nullableEmailValidator = function nullableEmailValidator(messageKey, key) {
  return emailValidator().allow(null).messages((0, _apiResponses.joiEmailError)(messageKey, key));
};

exports.nullableEmailValidator = nullableEmailValidator;

var numberValidator = function numberValidator(messageKey, key) {
  return _joi["default"].number().messages((0, _apiResponses.joiNumberError)(messageKey, key));
};

exports.numberValidator = numberValidator;

var requiredNumberValidator = function requiredNumberValidator(messageKey, key) {
  return _joi["default"].number().required().messages((0, _apiResponses.joiNumberError)(messageKey, key));
};

exports.requiredNumberValidator = requiredNumberValidator;

var nullableNumberValidator = function nullableNumberValidator(messageKey, key) {
  return _joi["default"].number().allow(null).messages((0, _apiResponses.joiNumberError)(messageKey, key));
};

exports.nullableNumberValidator = nullableNumberValidator;

var booleanValidator = function booleanValidator(messageKey, key) {
  return _joi["default"]["boolean"]().messages((0, _apiResponses.joiBooleanError)(messageKey, key));
};

exports.booleanValidator = booleanValidator;

var requiredBooleanValidator = function requiredBooleanValidator(messageKey, key) {
  return _joi["default"]["boolean"]().required().messages((0, _apiResponses.joiBooleanError)(messageKey, key));
};

exports.requiredBooleanValidator = requiredBooleanValidator;

var requiredEnumValidator = function requiredEnumValidator() {
  var _Joi$string;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var messageKey = arguments.length > 1 ? arguments[1] : undefined;
  var key = arguments.length > 2 ? arguments[2] : undefined;
  return (_Joi$string = _joi["default"].string()).valid.apply(_Joi$string, _toConsumableArray(options)).required().messages((0, _apiResponses.joiStringError)(messageKey, key));
};

exports.requiredEnumValidator = requiredEnumValidator;

var nullableEnumValidator = function nullableEnumValidator() {
  var _Joi$string2;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var messageKey = arguments.length > 1 ? arguments[1] : undefined;
  var key = arguments.length > 2 ? arguments[2] : undefined;
  return (_Joi$string2 = _joi["default"].string()).valid.apply(_Joi$string2, _toConsumableArray(options)).allow(null).messages((0, _apiResponses.joiStringError)(messageKey, key));
};

exports.nullableEnumValidator = nullableEnumValidator;

var enumValidator = function enumValidator() {
  var _Joi$string3;

  var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var messageKey = arguments.length > 1 ? arguments[1] : undefined;
  var key = arguments.length > 2 ? arguments[2] : undefined;
  return (_Joi$string3 = _joi["default"].string()).valid.apply(_Joi$string3, _toConsumableArray(options)).messages((0, _apiResponses.joiStringError)(messageKey, key));
};

exports.enumValidator = enumValidator;

var requiredRegexValidator = function requiredRegexValidator(pattern, messageKey, key) {
  return _joi["default"].string().regex(pattern).required().messages((0, _apiResponses.joiStringError)(messageKey, key));
};

exports.requiredRegexValidator = requiredRegexValidator;

var nullableRegexValidator = function nullableRegexValidator(pattern, messageKey, key) {
  return _joi["default"].string().regex(pattern).allow(null).messages((0, _apiResponses.joiStringError)(messageKey, key));
};

exports.nullableRegexValidator = nullableRegexValidator;

var regexValidator = function regexValidator(pattern, messageKey, key) {
  return _joi["default"].string().regex(pattern).messages((0, _apiResponses.joiStringError)(messageKey, key));
};

exports.regexValidator = regexValidator;