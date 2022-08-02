"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpgradeRequired = exports.Unauthorized = exports.ServerError = exports.NotFound = exports.Forbidden = exports.Conflict = exports.BadRequest = void 0;

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable max-classes-per-file */
var BadRequest = /*#__PURE__*/function (_Error) {
  _inherits(BadRequest, _Error);

  var _super = _createSuper(BadRequest);

  function BadRequest(msg) {
    var _this;

    _classCallCheck(this, BadRequest);

    _this = _super.call(this, msg);
    _this.status = 400;
    return _this;
  }

  return _createClass(BadRequest);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.BadRequest = BadRequest;

var Unauthorized = /*#__PURE__*/function (_Error2) {
  _inherits(Unauthorized, _Error2);

  var _super2 = _createSuper(Unauthorized);

  function Unauthorized(msg) {
    var _this2;

    _classCallCheck(this, Unauthorized);

    _this2 = _super2.call(this, msg);
    _this2.status = 401;
    return _this2;
  }

  return _createClass(Unauthorized);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.Unauthorized = Unauthorized;

var Forbidden = /*#__PURE__*/function (_Error3) {
  _inherits(Forbidden, _Error3);

  var _super3 = _createSuper(Forbidden);

  function Forbidden(msg) {
    var _this3;

    _classCallCheck(this, Forbidden);

    _this3 = _super3.call(this, msg);
    _this3.status = 403;
    return _this3;
  }

  return _createClass(Forbidden);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.Forbidden = Forbidden;

var NotFound = /*#__PURE__*/function (_Error4) {
  _inherits(NotFound, _Error4);

  var _super4 = _createSuper(NotFound);

  function NotFound(msg) {
    var _this4;

    _classCallCheck(this, NotFound);

    _this4 = _super4.call(this, msg);
    _this4.status = 404;
    return _this4;
  }

  return _createClass(NotFound);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.NotFound = NotFound;

var Conflict = /*#__PURE__*/function (_Error5) {
  _inherits(Conflict, _Error5);

  var _super5 = _createSuper(Conflict);

  function Conflict(msg) {
    var _this5;

    _classCallCheck(this, Conflict);

    _this5 = _super5.call(this, msg);
    _this5.status = 409;
    return _this5;
  }

  return _createClass(Conflict);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.Conflict = Conflict;

var UpgradeRequired = /*#__PURE__*/function (_Error6) {
  _inherits(UpgradeRequired, _Error6);

  var _super6 = _createSuper(UpgradeRequired);

  function UpgradeRequired(msg) {
    var _this6;

    _classCallCheck(this, UpgradeRequired);

    _this6 = _super6.call(this, msg);
    _this6.status = 426;
    return _this6;
  }

  return _createClass(UpgradeRequired);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.UpgradeRequired = UpgradeRequired;

var ServerError = /*#__PURE__*/function (_Error7) {
  _inherits(ServerError, _Error7);

  var _super7 = _createSuper(ServerError);

  function ServerError(msg) {
    var _this7;

    _classCallCheck(this, ServerError);

    _this7 = _super7.call(this, msg);
    _this7.status = 500;
    return _this7;
  }

  return _createClass(ServerError);
}( /*#__PURE__*/_wrapNativeSuper(Error));

exports.ServerError = ServerError;