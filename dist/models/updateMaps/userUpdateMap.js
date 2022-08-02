"use strict";

var _utils = require("../../utils");

module.exports = function (user) {
  var map = {
    status: user.status,
    updated_by: user.updatedBy
  };
  return (0, _utils.filterUndefinedFromObject)(map);
};