"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joi = _interopRequireDefault(require("joi"));

var _config = _interopRequireDefault(require("../../../config"));

var _utils = require("../../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = _joi["default"].object(function (messageKey) {
  return {
    email: (0, _utils.requiredStringValidator)(messageKey, 'email'),
    password: (0, _utils.requiredStringValidator)(messageKey, 'password'),
    aud: (0, _utils.nullableEnumValidator)([_config["default"].authTokens.audience.web, _config["default"].authTokens.audience.app], messageKey, 'aud')
  };
}('login')).options({
  stripUnknown: true
});

exports["default"] = _default;