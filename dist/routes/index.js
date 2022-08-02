"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _utils = require("./utils");

var _pingRoutes = _interopRequireDefault(require("./pingRoutes"));

var _securityRoutes = _interopRequireDefault(require("./securityRoutes"));

var _userRoutes = _interopRequireDefault(require("./userRoutes"));

var _testRoutes = _interopRequireDefault(require("./testRoutes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// guaranteed to get dependencies
var _default = function _default() {
  (0, _pingRoutes["default"])();
  (0, _securityRoutes["default"])();
  (0, _userRoutes["default"])();
  (0, _testRoutes["default"])();
  return _utils.route;
};

exports["default"] = _default;