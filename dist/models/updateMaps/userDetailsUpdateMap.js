"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("../../utils");

var _default = function _default(user) {
  var map = {
    first_name: user.firstName,
    last_name: user.lastName,
    updated_by: user.updatedBy
  };
  return (0, _utils.filterUndefinedFromObject)(map);
};

exports["default"] = _default;