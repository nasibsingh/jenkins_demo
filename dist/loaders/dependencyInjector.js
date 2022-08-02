"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typedi = require("typedi");

var _default = function _default(_ref) {
  var DbTransactions = _ref.DbTransactions;

  _typedi.Container.set('DbTransactions', DbTransactions);
};

exports["default"] = _default;