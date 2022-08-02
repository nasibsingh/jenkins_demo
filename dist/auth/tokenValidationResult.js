"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var TokenValidationResult = /*#__PURE__*/function () {
  function TokenValidationResult(status, user) {
    _classCallCheck(this, TokenValidationResult);

    this.status = status;
    this.user = user;
  }

  _createClass(TokenValidationResult, [{
    key: "isValid",
    value: function isValid() {
      return this.status === TokenValidationResult.tokenValidationStatus.VALID;
    }
  }]);

  return TokenValidationResult;
}();

_defineProperty(TokenValidationResult, "tokenValidationStatus", Object.freeze({
  VALID: 'VALID',
  EXPIRED: 'EXPIRED',
  INVALID_USER: 'INVALID_USER',
  INACTIVE_USER: 'INACTIVE_USER',
  OLD_VERSION: 'OLD_VERSION'
}));

var _default = TokenValidationResult;
exports["default"] = _default;