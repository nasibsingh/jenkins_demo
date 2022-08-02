"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _models = require("../models");

var _auth = require("../auth");

var _helper = require("./helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UserDao = /*#__PURE__*/function () {
  function UserDao() {
    _classCallCheck(this, UserDao);

    _defineProperty(this, "userJoins", "LEFT JOIN user_roles ur ON ur.user_id = u.id\n                  LEFT JOIN roles r ON r.id = ur.role_id\n                  LEFT JOIN user_details ud ON ud.user_id = u.id\n                  LEFT JOIN user_login_details uld ON uld.user_id = u.id\n");

    _defineProperty(this, "userQuery", "SELECT u.id,u.email,u.password,u.status,u.created_on,r.name as role, ud.first_name,\n                ud.last_name,uld.wrong_login_count, uld.last_wrong_login_attempt, uld.last_login\n                FROM users u\n".concat(this.userJoins));
  }

  _createClass(UserDao, [{
    key: "createUser",
    value: function () {
      var _createUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(client, createUserDto, createdBy) {
        var res, userId, detailsCreatedBy;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return client.query("INSERT INTO users \n      (email, password, status, created_by, updated_by) \n      VALUES ($1, $2, $3, $4, $5) RETURNING id", [createUserDto.email, createUserDto.password, createUserDto.status, createdBy, createdBy]);

              case 2:
                res = _context.sent;
                userId = _helper.Mapper.getId(res);
                detailsCreatedBy = createdBy || userId;
                _context.next = 7;
                return client.query("INSERT INTO user_details\n      (user_id, first_name, last_name, created_by, updated_by)\n      VALUES ($1, $2, $3, $4, $5)", [userId, createUserDto.firstName, createUserDto.lastName, detailsCreatedBy, detailsCreatedBy]);

              case 7:
                return _context.abrupt("return", userId);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function createUser(_x, _x2, _x3) {
        return _createUser.apply(this, arguments);
      }

      return createUser;
    }()
  }, {
    key: "updateUser",
    value: function () {
      var _updateUser = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(client, updateUserDto) {
        var _Queries$updaterFor, sql1, args1, res1, _Queries$updaterFor2, sql2, args2, res2;

        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _Queries$updaterFor = _helper.Queries.updaterFor('users', _models.userUpdateMap, updateUserDto), sql1 = _Queries$updaterFor.sql, args1 = _Queries$updaterFor.args;
                _context2.next = 3;
                return client.query(sql1, args1);

              case 3:
                res1 = _context2.sent;
                _Queries$updaterFor2 = _helper.Queries.updaterFor('user_details', _models.userDetailsUpdateMap, updateUserDto, 'user_id'), sql2 = _Queries$updaterFor2.sql, args2 = _Queries$updaterFor2.args;
                _context2.next = 7;
                return client.query(sql2, args2);

              case 7:
                res2 = _context2.sent;
                return _context2.abrupt("return", res1.rowCount === 1 && res2.rowCount === 1);

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function updateUser(_x4, _x5) {
        return _updateUser.apply(this, arguments);
      }

      return updateUser;
    }()
  }, {
    key: "findUserByEmail",
    value: function () {
      var _findUserByEmail = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(client, email) {
        var qb, _qb$build, sql, args, res;

        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                qb = new _helper.QueryBuilder("".concat(this.userQuery, " WHERE u.email = ?"), [email]);
                _qb$build = qb.build(), sql = _qb$build.sql, args = _qb$build.args;
                _context3.next = 4;
                return client.query(sql, args);

              case 4:
                res = _context3.sent;
                return _context3.abrupt("return", _helper.Mapper.getUnique(res, UserDao.mapUserWithRoles));

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function findUserByEmail(_x6, _x7) {
        return _findUserByEmail.apply(this, arguments);
      }

      return findUserByEmail;
    }()
  }, {
    key: "findUserById",
    value: function () {
      var _findUserById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(client, id) {
        var qb, _qb$build2, sql, args, res;

        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                qb = new _helper.QueryBuilder("".concat(this.userQuery, " WHERE u.id = ?"), [id]);
                _qb$build2 = qb.build(), sql = _qb$build2.sql, args = _qb$build2.args;
                _context4.next = 4;
                return client.query(sql, args);

              case 4:
                res = _context4.sent;
                return _context4.abrupt("return", _helper.Mapper.getUnique(res, UserDao.mapUserWithRoles));

              case 6:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function findUserById(_x8, _x9) {
        return _findUserById.apply(this, arguments);
      }

      return findUserById;
    }()
  }, {
    key: "markUserLogin",
    value: function () {
      var _markUserLogin = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(client, userId) {
        var hasLoginDetails, res, values;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this.hasLoginDetails(client, userId);

              case 2:
                hasLoginDetails = _context5.sent;
                values = [(0, _moment["default"])(), 0, null, userId];

                if (!hasLoginDetails) {
                  _context5.next = 10;
                  break;
                }

                _context5.next = 7;
                return client.query("UPDATE user_login_details \n        SET last_login = $1, wrong_login_count = $2,\n        last_wrong_login_attempt = $3 WHERE user_id = $4", values);

              case 7:
                res = _context5.sent;
                _context5.next = 13;
                break;

              case 10:
                _context5.next = 12;
                return client.query("INSERT INTO user_login_details \n        (last_login, wrong_login_count, last_wrong_login_attempt,user_id) \n        VALUES ($1,$2,$3,$4)", values);

              case 12:
                res = _context5.sent;

              case 13:
                return _context5.abrupt("return", res.rowCount === 1);

              case 14:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function markUserLogin(_x10, _x11) {
        return _markUserLogin.apply(this, arguments);
      }

      return markUserLogin;
    }()
  }, {
    key: "markWrongLoginAttempt",
    value: function () {
      var _markWrongLoginAttempt = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(client, wrongLoginCount, userId) {
        var hasLoginDetails, res, values;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return this.hasLoginDetails(client, userId);

              case 2:
                hasLoginDetails = _context6.sent;
                values = [wrongLoginCount, (0, _moment["default"])(), userId];

                if (!hasLoginDetails) {
                  _context6.next = 10;
                  break;
                }

                _context6.next = 7;
                return client.query("UPDATE user_login_details \n        SET wrong_login_count = $1, last_wrong_login_attempt = $2 \n        WHERE user_id = $3", values);

              case 7:
                res = _context6.sent;
                _context6.next = 13;
                break;

              case 10:
                _context6.next = 12;
                return client.query("INSERT INTO user_login_details \n        (wrong_login_count, last_wrong_login_attempt, user_id) \n        VALUES ($1, $2, $3)", values);

              case 12:
                res = _context6.sent;

              case 13:
                return _context6.abrupt("return", res.rowCount === 1);

              case 14:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function markWrongLoginAttempt(_x12, _x13, _x14) {
        return _markWrongLoginAttempt.apply(this, arguments);
      }

      return markWrongLoginAttempt;
    }()
  }, {
    key: "hasLoginDetails",
    value: function () {
      var _hasLoginDetails = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(client, userId) {
        var res;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return client.query("SELECT user_id as id FROM user_login_details \n      WHERE user_id = $1", [userId]);

              case 2:
                res = _context7.sent;
                return _context7.abrupt("return", _helper.Mapper.getId(res) !== 0);

              case 4:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function hasLoginDetails(_x15, _x16) {
        return _hasLoginDetails.apply(this, arguments);
      }

      return hasLoginDetails;
    }()
  }, {
    key: "deleteUserById",
    value: function () {
      var _deleteUserById = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(client, id) {
        var res;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) {
            switch (_context8.prev = _context8.next) {
              case 0:
                _context8.next = 2;
                return client.query('DELETE FROM users WHERE id = $1', [id]);

              case 2:
                res = _context8.sent;
                return _context8.abrupt("return", res.rowCount === 1);

              case 4:
              case "end":
                return _context8.stop();
            }
          }
        }, _callee8);
      }));

      function deleteUserById(_x17, _x18) {
        return _deleteUserById.apply(this, arguments);
      }

      return deleteUserById;
    }()
  }, {
    key: "attachRole",
    value: function () {
      var _attachRole = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(client, userId, role) {
        var res;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                _context9.next = 2;
                return client.query("INSERT INTO user_roles (user_id, role_id)\n      VALUES ($1,(SELECT id FROM roles WHERE name = $2))", [userId, role]);

              case 2:
                res = _context9.sent;
                return _context9.abrupt("return", res.rowCount === 1);

              case 4:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9);
      }));

      function attachRole(_x19, _x20, _x21) {
        return _attachRole.apply(this, arguments);
      }

      return attachRole;
    }()
  }, {
    key: "findDuplicate",
    value: function () {
      var _findDuplicate = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee10(client, user, ignoreId) {
        var qb, _qb$build3, sql, args, res;

        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                qb = new _helper.QueryBuilder("SELECT id FROM users \n      WHERE email = ?\n", [user.email]);

                if (ignoreId) {
                  qb.append('AND id != ?', [ignoreId]);
                }

                _qb$build3 = qb.build(), sql = _qb$build3.sql, args = _qb$build3.args;
                _context10.next = 5;
                return client.query(sql, args);

              case 5:
                res = _context10.sent;
                return _context10.abrupt("return", _helper.Mapper.getId(res) !== 0);

              case 7:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10);
      }));

      function findDuplicate(_x22, _x23, _x24) {
        return _findDuplicate.apply(this, arguments);
      }

      return findDuplicate;
    }()
  }]);

  return UserDao;
}();

_defineProperty(UserDao, "mapUserWithRoles", function (rows) {
  var firstRow = rows[0];
  var rolesSet = new Set();
  rows.forEach(function (row) {
    if (row.role) {
      rolesSet.add(row.role);
    }
  });
  var roles = Array.from(rolesSet).map(function (role) {
    return new _auth.Role(role);
  });
  return {
    id: (0, _helper.parserId)(firstRow.id),
    email: firstRow.email,
    passwordHash: firstRow.password ? new _models.PasswordHash(firstRow.password) : null,
    status: firstRow.status,
    firstName: firstRow.first_name,
    lastName: firstRow.last_name,
    wrongLoginCount: (0, _helper.parserInteger)(firstRow.wrong_login_count),
    lastWrongLoginAttempt: (0, _helper.parserDate)(firstRow.last_wrong_login_attempt),
    lastLogin: (0, _helper.parserDate)(firstRow.last_login),
    createdOn: (0, _helper.parserDate)(firstRow.created_on),
    roles: roles
  };
});

var _default = UserDao;
exports["default"] = _default;