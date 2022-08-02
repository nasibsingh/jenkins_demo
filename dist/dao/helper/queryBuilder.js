"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _stringBuilder = _interopRequireDefault(require("./stringBuilder"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var QueryBuilder = /*#__PURE__*/function () {
  function QueryBuilder(query, args) {
    _classCallCheck(this, QueryBuilder);

    this.query = new _stringBuilder["default"]();
    this.args = [];
    this.append(query, args);
    return this;
  }
  /**
   * Appends given fragment and arguments to this query.
   */


  _createClass(QueryBuilder, [{
    key: "append",
    value: function append(sql, args) {
      this.appendSql(sql);
      this.appendArgs(args);
      return this;
    }
    /**
     * Appends given fragment to this query.
     */

  }, {
    key: "appendSql",
    value: function appendSql(sql) {
      this.query.append(sql);
      return this;
    }
    /**
     * Appends given arguments to this query.
     */

  }, {
    key: "appendArgs",
    value: function appendArgs() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.args = _toConsumableArray(this.args.concat(args));
      return this;
    }
    /**
     * Adds a given amount of comma-separated place-holders.
     * The amount must be at-least 1.
     */

  }, {
    key: "appendPlaceholders",
    value: function appendPlaceholders() {
      var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      if (count <= 0) throw new Error("count must be positive, but was: ".concat(count));
      this.query.append('?');

      for (var i = 1; i < count; i += 1) {
        this.query.append(',?');
      }

      return this;
    }
    /**
     * Is the query string empty?
     */

  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this.query.length() === 0;
    }
    /**
     * Does this query have any arguments?
     */

  }, {
    key: "hasArguments",
    value: function hasArguments() {
      return this.args.length !== 0;
    }
  }, {
    key: "build",
    value: function build() {
      if (this.query.length() === 0) throw new Error('empty query');
      var query = this.query.toString();

      for (var i = 1; i <= this.args.length; i += 1) {
        query = query.replace('?', "$".concat(i));
      }

      if (query.indexOf('?') !== -1) {
        throw new Error('placeholder arguments mismatched');
      }

      return {
        sql: query,
        args: _toConsumableArray(this.args)
      };
    }
  }], [{
    key: "formatQuery",
    value: function formatQuery(queryString) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return [].concat(args).reduce(function (acc, arg) {
        return acc.replace('{s}', arg);
      }, queryString);
    }
  }]);

  return QueryBuilder;
}();

_defineProperty(QueryBuilder, "placeholder", '?');

var _default = QueryBuilder;
exports["default"] = _default;