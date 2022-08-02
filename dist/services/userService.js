"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _typedi = require("typedi");

var _dao = require("../dao");

var _utils = require("../utils");

var _models = require("../models");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserService = /*#__PURE__*/function () {
  function UserService() {
    _classCallCheck(this, UserService);

    this.txs = _typedi.Container.get('DbTransactions');
    this.dao = _typedi.Container.get(_dao.UserDao);
  }

  _createClass(UserService, [{
    key: "createUser",
    value: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(client, dto, createdBy) {
        var messageKey, createUserDto, id, user;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                messageKey = 'createUser';
                _context.next = 3;
                return this.dao.findDuplicate(client, dto);

              case 3:
                if (!_context.sent) {
                  _context.next = 5;
                  break;
                }

                throw new _utils.HttpException.Conflict((0, _utils.formatErrorResponse)(messageKey, 'duplicateUser'));

              case 5:
                _context.prev = 5;
                _context.next = 8;
                return UserService.createUserDto(dto, createdBy);

              case 8:
                createUserDto = _context.sent;
                _context.next = 11;
                return this.dao.createUser(client, createUserDto);

              case 11:
                id = _context.sent;
                _context.next = 14;
                return this.dao.attachRole(client, id, dto.role);

              case 14:
                user = this.findUserById(client, id);
                return _context.abrupt("return", user);

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](5);
                console.log(_context.t0);
                throw new _utils.HttpException.BadRequest((0, _utils.formatErrorResponse)(messageKey, 'unableToCreate'));

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 18]]);
      }));

      function createUser(_x, _x2, _x3) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(client, dto, updatedBy) {
        var messageKey, updateUserDto, success;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                messageKey = 'updateUser';
                _context2.prev = 1;
                updateUserDto = UserService.updateUserDto(dto, updatedBy);
                _context2.next = 5;
                return this.dao.updateUser(client, updateUserDto);

              case 5:
                success = _context2.sent;

                if (success) {
                  _context2.next = 8;
                  break;
                }

                throw new _utils.HttpException.NotFound((0, _utils.formatErrorResponse)(messageKey, 'unableToUpdate'));

              case 8:
                _context2.next = 14;
                break;

              case 10:
                _context2.prev = 10;
                _context2.t0 = _context2["catch"](1);
                console.log(_context2.t0);
                throw new _utils.HttpException.NotFound((0, _utils.formatErrorResponse)(messageKey, 'unableToUpdate'));

              case 14:
                _context2.next = 16;
                return this.findUserById(client, dto.id);

              case 16:
                return _context2.abrupt("return", _context2.sent);

              case 17:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 10]]);
      }));

      function updateUser(_x4, _x5, _x6) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
  }, {
    key: "markUserLogin",
    value: function () {
      var _markUserLogin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(client, userId) {
        var messageKey;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                messageKey = 'markUserLogin';
                _context3.prev = 1;
                _context3.next = 4;
                return this.dao.markUserLogin(client, userId);

              case 4:
                _context3.next = 10;
                break;

              case 6:
                _context3.prev = 6;
                _context3.t0 = _context3["catch"](1);
                console.log(_context3.t0);
                throw new _utils.HttpException.ServerError((0, _utils.formatErrorResponse)(messageKey, 'unableToMark'));

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[1, 6]]);
      }));

      function markUserLogin(_x7, _x8) {
        return _markUserLogin.apply(this, arguments);
      }

      return markUserLogin;
    }()
  }, {
    key: "updateUserWrongLoginCount",
    value: function () {
      var _updateUserWrongLoginCount = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(wrongLoginCount, userId) {
        var _this = this;

        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                return _context5.abrupt("return", this.txs.withTransaction( /*#__PURE__*/function () {
                  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(client) {
                    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                      while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return _this.dao.markWrongLoginAttempt(client, wrongLoginCount, userId);

                          case 2:
                          case "end":
                            return _context4.stop();
                        }
                      }
                    }, _callee4);
                  }));

                  return function (_x11) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function updateUserWrongLoginCount(_x9, _x10) {
        return _updateUserWrongLoginCount.apply(this, arguments);
      }

      return updateUserWrongLoginCount;
    }()
  }, {
    key: "findUserById",
    value: function () {
      var _findUserById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(client, id) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.t0 = UserService;
                _context6.next = 3;
                return this.dao.findUserById(client, id);

              case 3:
                _context6.t1 = _context6.sent;
                return _context6.abrupt("return", _context6.t0.fromUser.call(_context6.t0, _context6.t1));

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function findUserById(_x12, _x13) {
        return _findUserById.apply(this, arguments);
      }

      return findUserById;
    }()
  }, {
    key: "findUserByEmail",
    value: function () {
      var _findUserByEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(client, email) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.t0 = UserService;
                _context7.next = 3;
                return this.dao.findUserByEmail(client, email);

              case 3:
                _context7.t1 = _context7.sent;
                return _context7.abrupt("return", _context7.t0.fromUser.call(_context7.t0, _context7.t1));

              case 5:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7, this);
      }));

      function findUserByEmail(_x14, _x15) {
        return _findUserByEmail.apply(this, arguments);
      }

      return findUserByEmail;
    }()
  }, {
    key: "findPersistedUserById",
    value: function () {
      var _findPersistedUserById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(id) {
        var _this2 = this;

        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                return _context9.abrupt("return", this.txs.withTransaction( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(client) {
                    var user;
                    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            _context8.next = 2;
                            return _this2.findUserById(client, id);

                          case 2:
                            user = _context8.sent;

                            if (user) {
                              _context8.next = 5;
                              break;
                            }

                            throw new _utils.HttpException.NotFound((0, _utils.formatErrorResponse)('fetchUser', 'notFound'));

                          case 5:
                            return _context8.abrupt("return", user);

                          case 6:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8);
                  }));

                  return function (_x17) {
                    return _ref2.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function findPersistedUserById(_x16) {
        return _findPersistedUserById.apply(this, arguments);
      }

      return findPersistedUserById;
    }()
  }, {
    key: "fetchUserProfile",
    value: function () {
      var _fetchUserProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(actionUser) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                return _context10.abrupt("return", UserService.fromUserProfile(actionUser));

              case 1:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function fetchUserProfile(_x18) {
        return _fetchUserProfile.apply(this, arguments);
      }

      return fetchUserProfile;
    }()
  }, {
    key: "modifyUserProfile",
    value: function () {
      var _modifyUserProfile = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee12(updateDto, actionUser) {
        var _this3 = this;

        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) {
            switch (_context12.prev = _context12.next) {
              case 0:
                return _context12.abrupt("return", this.txs.withTransaction( /*#__PURE__*/function () {
                  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee11(client) {
                    var user;
                    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                      while (1) {
                        switch (_context11.prev = _context11.next) {
                          case 0:
                            _context11.next = 2;
                            return _this3.updateUser(client, _objectSpread(_objectSpread({}, updateDto), {}, {
                              id: actionUser.id
                            }), actionUser.id);

                          case 2:
                            user = _context11.sent;
                            return _context11.abrupt("return", UserService.fromUserProfile(user));

                          case 4:
                          case "end":
                            return _context11.stop();
                        }
                      }
                    }, _callee11);
                  }));

                  return function (_x21) {
                    return _ref3.apply(this, arguments);
                  };
                }()));

              case 1:
              case "end":
                return _context12.stop();
            }
          }
        }, _callee12, this);
      }));

      function modifyUserProfile(_x19, _x20) {
        return _modifyUserProfile.apply(this, arguments);
      }

      return modifyUserProfile;
    }()
  }], [{
    key: "createUserDto",
    value: function () {
      var _createUserDto = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        var dto,
            createdBy,
            hash,
            _args13 = arguments;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) {
            switch (_context13.prev = _context13.next) {
              case 0:
                dto = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {};
                createdBy = _args13.length > 1 ? _args13[1] : undefined;
                hash = null;

                if (!dto.password) {
                  _context13.next = 7;
                  break;
                }

                _context13.next = 6;
                return new _models.Password(dto.password).hashPassword();

              case 6:
                hash = _context13.sent;

              case 7:
                return _context13.abrupt("return", {
                  firstName: dto.firstName,
                  lastName: dto.lastName,
                  email: dto.email,
                  password: hash,
                  status: _utils.STATUS.ACTIVE,
                  createdBy: createdBy
                });

              case 8:
              case "end":
                return _context13.stop();
            }
          }
        }, _callee13);
      }));

      function createUserDto() {
        return _createUserDto.apply(this, arguments);
      }

      return createUserDto;
    }()
  }, {
    key: "updateUserDto",
    value: function updateUserDto() {
      var dto = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var updatedBy = arguments.length > 1 ? arguments[1] : undefined;
      return {
        id: dto.id,
        firstName: dto.firstName,
        lastName: dto.lastName,
        updatedBy: updatedBy
      };
    }
  }, {
    key: "fromUser",
    value: function fromUser(user) {
      if (!user) {
        return null;
      }

      return _objectSpread({}, user);
    }
  }, {
    key: "fromUserProfile",
    value: function fromUserProfile(user) {
      if (!user) {
        return null;
      }

      return {
        id: user.id,
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        status: user.status
      };
    }
  }]);

  return UserService;
}();

var _default = UserService;
exports["default"] = _default;