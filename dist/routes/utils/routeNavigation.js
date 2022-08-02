"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var API_ROOT = '/api';
var USER_ROOT = "".concat(API_ROOT, "/user");

var _default = Object.freeze({
  ping: "".concat(API_ROOT, "/ping"),
  healthCheck: "".concat(API_ROOT, "/health-check"),
  security: {
    SIGN_UP: "".concat(API_ROOT, "/signup"),
    LOGIN: "".concat(API_ROOT, "/login"),
    SOCIAL_LOGIN: "".concat(API_ROOT, "/social-login")
  },
  user: {
    PROFILE: "".concat(USER_ROOT, "/profile")
  },
  test: {
    TEST_ACTION: "".concat(API_ROOT, "/test/")
  }
});

exports["default"] = _default;