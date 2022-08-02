"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _queryBuilder = _interopRequireDefault(require("./queryBuilder"));

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

var Queries = /*#__PURE__*/function () {
  function Queries() {
    _classCallCheck(this, Queries);
  }

  _createClass(Queries, null, [{
    key: "updaterFor",
    value: function updaterFor(tableName, updateMapper, entity) {
      var uniqueKey = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'id';
      var qb = new _queryBuilder["default"]('UPDATE ').append(tableName).append(' SET ');
      var updateMap = updateMapper(entity);

      if (Object.keys(updateMap).length === 0) {
        return qb.append("id = id WHERE ".concat(uniqueKey, " = ?"), [entity.id]).build();
      }

      Object.keys(updateMap).forEach(function (key, i, arr) {
        qb.append("".concat(key, "=?"), [updateMap[key]]);
        if (i + 1 !== arr.length) qb.append(',');
      });
      return qb.append(" WHERE ".concat(uniqueKey, " = ?"), [entity.id]).build();
    }
  }, {
    key: "batchInsert",
    value: function batchInsert(baseSql, elems, transformer) {
      var qb = new _queryBuilder["default"](baseSql);
      qb.append(' VALUES ');
      elems.forEach(function (elem, i) {
        var args = transformer(elem);
        var sql = '(';

        for (var j = 0; j < args.length; j++) {
          sql += "".concat(_queryBuilder["default"].placeholder);
          if (j + 1 !== args.length) sql += ',';
        }

        sql += ')';
        qb.append(sql, _toConsumableArray(args));
        if (i + 1 !== elems.length) qb.append(',');
      });
      return qb.build();
    }
  }]);

  return Queries;
}();

var _default = Queries;
exports["default"] = _default;