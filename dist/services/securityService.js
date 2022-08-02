"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typedi = require("typedi");

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _moment = _interopRequireDefault(require("moment"));

var _config = _interopRequireDefault(require("../config"));

var _utils = require("../utils");

var _auth = require("../auth");

var _userService = _interopRequireDefault(require("./userService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SecurityService = /*#__PURE__*/function () {
  function SecurityService() {
    _classCallCheck(this, SecurityService);

    this.txs = _typedi.Container.get('DbTransactions');
    this.userService = _typedi.Container.get(_userService["default"]);
  }

  _createClass(SecurityService, [{
    key: "updateUserWrongLoginCount",
    value: function () {
      var _updateUserWrongLoginCount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(user) {
        var wrongLoginCount;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                wrongLoginCount = (user.wrongLoginCount || 0) + 1;
                if (wrongLoginCount > SecurityService.MAX_LOGIN_ATTEMPTS) wrongLoginCount = 1;
                _context.next = 4;
                return this.userService.updateUserWrongLoginCount(wrongLoginCount, user.id);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateUserWrongLoginCount(_x) {
        return _updateUserWrongLoginCount.apply(this, arguments);
      }

      return updateUserWrongLoginCount;
    }()
  }, {
    key: "postLoginActions",
    value: function () {
      var _postLoginActions = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(client, userId) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.userService.markUserLogin(client, userId);

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function postLoginActions(_x2, _x3) {
        return _postLoginActions.apply(this, arguments);
      }

      return postLoginActions;
    }()
  }, {
    key: "login",
    value: function () {
      var _login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(ipAddress, email, password) {
        var _this = this;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return this.txs.withTransaction( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(client) {
                    var messageKey, invalidLoginErr, user, validPassword, roleIds, type, token;
                    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                      while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            messageKey = 'login';
                            invalidLoginErr = new _utils.HttpException.Forbidden((0, _utils.formatErrorResponse)(messageKey, 'invalidCredentials'));
                            _context3.next = 4;
                            return _this.userService.findUserByEmail(client, email);

                          case 4:
                            user = _context3.sent;

                            if (!(!user || !user.passwordHash)) {
                              _context3.next = 7;
                              break;
                            }

                            throw invalidLoginErr;

                          case 7:
                            if (!SecurityService.accountBlocked(user)) {
                              _context3.next = 9;
                              break;
                            }

                            throw new _utils.HttpException.Forbidden((0, _utils.formatErrorResponse)(messageKey, 'accountBlocked'));

                          case 9:
                            _context3.next = 11;
                            return user.passwordHash.check(password);

                          case 11:
                            validPassword = _context3.sent;
                            _context3.t0 = validPassword;

                            if (!_context3.t0) {
                              _context3.next = 17;
                              break;
                            }

                            _context3.next = 16;
                            return _this.canLogin(user);

                          case 16:
                            _context3.t0 = _context3.sent;

                          case 17:
                            if (!_context3.t0) {
                              _context3.next = 24;
                              break;
                            }

                            roleIds = user.roles.map(function (role) {
                              return role.getId();
                            });
                            type = Math.max.apply(Math, _toConsumableArray(roleIds));
                            token = SecurityService.createToken(ipAddress, user.email, _config["default"].authTokens.audience.app, type, !user.lastLogin);
                            _context3.next = 23;
                            return _this.postLoginActions(client, user.id);

                          case 23:
                            return _context3.abrupt("return", {
                              token: token
                            });

                          case 24:
                            _this.updateUserWrongLoginCount(user);

                            throw invalidLoginErr;

                          case 26:
                          case "end":
                            return _context3.stop();
                        }
                      }
                    }, _callee3);
                  }));

                  return function (_x7) {
                    return _ref.apply(this, arguments);
                  };
                }());

              case 2:
                return _context4.abrupt("return", _context4.sent);

              case 3:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function login(_x4, _x5, _x6) {
        return _login.apply(this, arguments);
      }

      return login;
    }()
    /** Used to signup only mobile app users */

  }, {
    key: "signUp",
    value: function () {
      var _signUp = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(ipAddress, signUpDto) {
        var _this2 = this;

        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.txs.withTransaction( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(client) {
                    var user, token;
                    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                      while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _this2.userService.createUser(client, _objectSpread(_objectSpread({}, signUpDto), {}, {
                              role: _auth.Role.roleValues.USER
                            }));

                          case 2:
                            user = _context5.sent;
                            token = SecurityService.createToken(ipAddress, user.email, _config["default"].authTokens.audience.app, !user.lastLogin);
                            _context5.next = 6;
                            return _this2.userService.markUserLogin(client, user.id);

                          case 6:
                            return _context5.abrupt("return", {
                              token: token
                            });

                          case 7:
                          case "end":
                            return _context5.stop();
                        }
                      }
                    }, _callee5);
                  }));

                  return function (_x10) {
                    return _ref2.apply(this, arguments);
                  };
                }());

              case 2:
                return _context6.abrupt("return", _context6.sent);

              case 3:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function signUp(_x8, _x9) {
        return _signUp.apply(this, arguments);
      }

      return signUp;
    }()
  }, {
    key: "canLogin",
    value: function () {
      var _canLogin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(user) {
        var messageKey;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                messageKey = 'user';

                if (!(user.status !== _utils.STATUS.ACTIVE)) {
                  _context7.next = 3;
                  break;
                }

                throw new _utils.HttpException.Unauthorized((0, _utils.formatErrorResponse)(messageKey, 'inactiveUser'));

              case 3:
                return _context7.abrupt("return", _auth.Authentication.hasRight(user, _auth.Right.general.LOGIN));

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function canLogin(_x11) {
        return _canLogin.apply(this, arguments);
      }

      return canLogin;
    }()
  }, {
    key: "validateToken",
    value: function () {
      var _validateToken = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(ip, payload) {
        var _this3 = this;

        var email, user;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(payload.aud !== _config["default"].authTokens.audience.app && SecurityService.isExpired(ip, payload, (0, _moment["default"])()))) {
                  _context9.next = 2;
                  break;
                }

                return _context9.abrupt("return", new _auth.TokenValidationResult(_auth.TokenValidationResult.tokenValidationStatus.EXPIRED));

              case 2:
                if (!SecurityService.isOldVersion(payload)) {
                  _context9.next = 4;
                  break;
                }

                return _context9.abrupt("return", new _auth.TokenValidationResult(_auth.TokenValidationResult.tokenValidationStatus.OLD_VERSION));

              case 4:
                _context9.prev = 4;
                email = (0, _utils.decrypt)(payload.sub);
                _context9.next = 8;
                return this.txs.withTransaction( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(client) {
                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            return _context8.abrupt("return", _this3.userService.findUserByEmail(client, email));

                          case 1:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x14) {
                    return _ref3.apply(this, arguments);
                  };
                }());

              case 8:
                user = _context9.sent;

                if (!(!user || user.status !== _utils.STATUS.ACTIVE)) {
                  _context9.next = 11;
                  break;
                }

                return _context9.abrupt("return", new _auth.TokenValidationResult(_auth.TokenValidationResult.tokenValidationStatus.INACTIVE_USER));

              case 11:
                return _context9.abrupt("return", new _auth.TokenValidationResult(_auth.TokenValidationResult.tokenValidationStatus.VALID, user));

              case 14:
                _context9.prev = 14;
                _context9.t0 = _context9["catch"](4);
                return _context9.abrupt("return", new _auth.TokenValidationResult(_auth.TokenValidationResult.tokenValidationStatus.INVALID_USER));

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this, [[4, 14]]);
      }));

      function validateToken(_x12, _x13) {
        return _validateToken.apply(this, arguments);
      }

      return validateToken;
    }()
  }], [{
    key: "accountBlocked",
    value: function accountBlocked(user) {
      var blocked = false;

      if (user.wrongLoginCount >= SecurityService.MAX_LOGIN_ATTEMPTS && user.lastWrongLoginAttempt) {
        var bolckedTill = user.lastWrongLoginAttempt.clone().add(SecurityService.ACCOUNT_BLOCK_HOURS, 'hour');
        blocked = bolckedTill.isAfter();
      }

      return blocked;
    }
  }, {
    key: "updateToken",
    value: function updateToken(ipAddress, email, aud) {
      return SecurityService.createToken(ipAddress, email, aud);
    }
  }, {
    key: "createToken",
    value: function createToken(ipAddress, email, aud, firstLogin) {
      var payload = {
        exp: SecurityService.anyIpAddressExpiryTimestamp(),
        iat: SecurityService.currentTimestamp(),
        nbf: SecurityService.currentTimestamp(),
        iss: _config["default"].authTokens.issuer,
        sub: (0, _utils.encrypt)(email),
        aud: _config["default"].authTokens.audience.web,
        version: _config["default"].authTokens.version,
        exp2: {
          ip: ipAddress,
          time: SecurityService.sameIpAddressExpiryTimestamp()
        },
        firstLogin: firstLogin || undefined
      };

      if (aud && aud === _config["default"].authTokens.audience.app) {
        payload.aud = _config["default"].authTokens.audience.app;
        delete payload.exp;
        delete payload.exp2;
      }

      return _jsonwebtoken["default"].sign(payload, _config["default"].authTokens.privateKey, {
        algorithm: _config["default"].authTokens.algorithm
      });
    }
  }, {
    key: "currentTimestamp",
    value: function currentTimestamp() {
      return _moment["default"].utc().unix();
    }
  }, {
    key: "anyIpAddressExpiryTimestamp",
    value: function anyIpAddressExpiryTimestamp() {
      return (0, _moment["default"])().add(SecurityService.TOKEN_EXPIRATION_MINUTES, 'minute').unix();
    }
  }, {
    key: "sameIpAddressExpiryTimestamp",
    value: function sameIpAddressExpiryTimestamp() {
      return (0, _moment["default"])().add(SecurityService.SAME_IP_TOKEN_EXPIRATION_MINUTES, 'minute').unix();
    }
  }, {
    key: "isExpired",
    value: function isExpired(ip, payload, currentTime) {
      return !SecurityService.isValidForGeneralExpiration(currentTime, payload) && !SecurityService.isValidForSameIpExpiration(currentTime, ip, payload);
    }
  }, {
    key: "isValidForGeneralExpiration",
    value: function isValidForGeneralExpiration(currentTime, payload) {
      return _moment["default"].unix(payload.exp).isAfter(currentTime);
    }
  }, {
    key: "isValidForSameIpExpiration",
    value: function isValidForSameIpExpiration(currentTime, ip, payload) {
      return ip === payload.exp2.ip && _moment["default"].unix(payload.exp2.time).isAfter(currentTime);
    }
  }, {
    key: "isOldVersion",
    value: function isOldVersion(payload) {
      return _config["default"].authTokens.version !== payload.version;
    }
  }]);

  return SecurityService;
}();

_defineProperty(SecurityService, "TOKEN_EXPIRATION_MINUTES", 1);

_defineProperty(SecurityService, "SAME_IP_TOKEN_EXPIRATION_MINUTES", 60);

_defineProperty(SecurityService, "MAX_LOGIN_ATTEMPTS", 3);

_defineProperty(SecurityService, "ACCOUNT_BLOCK_HOURS", 1);

var _default = SecurityService;
exports["default"] = _default;