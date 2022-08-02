"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _joi["default"].object(function (messageKey) {
  return {
    firstName: (0, _utils.requiredStringValidator)(messageKey, 'firstName'),
    lastName: (0, _utils.requiredStringValidator)(messageKey, 'lastName'),
    email: (0, _utils.requiredEmailValidator)(messageKey, 'email'),
    password: (0, _utils.requiredStringValidator)(messageKey, 'password')
  };
}('signup')).options({
  stripUnknown: true
});

exports["default"] = _default;