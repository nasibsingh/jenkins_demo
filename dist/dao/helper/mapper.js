"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _joins = _interopRequireDefault(require("./joins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Mapper = /*#__PURE__*/function () {
  function Mapper() {
    _classCallCheck(this, Mapper);
  }

  _createClass(Mapper, null, [{
    key: "getTotalCount",
    value: function getTotalCount(res, column) {
      return parseInt(res.rows[0] ? res.rows[0][column || 'full_count'] || 0 : 0, 10);
    }
  }, {
    key: "getUnique",
    value: function getUnique(res, rowMapper) {
      return _joins["default"].resultMapper(res, rowMapper)[0];
    }
  }, {
    key: "getId",
    value: function getId(res) {
      return parseInt(res.rows[0] ? res.rows[0].id || 0 : 0, 10);
    }
  }, {
    key: "getNewMetaData",
    value: function getNewMetaData(filter, total) {
      return _objectSpread(_objectSpread({}, filter), {}, {
        page: filter.page + 1,
        total: total,
        limit: filter.allResults ? total : filter.limit
      });
    }
  }, {
    key: "getPaginatedResponse",
    value: function getPaginatedResponse(filter, searchResults) {
      var extraMetaData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return {
        metadata: _objectSpread(_objectSpread({
          order: filter.order || null,
          direction: filter.direction,
          page: filter.page,
          limit: filter.limit,
          total: filter.total
        }, extraMetaData), {}, {
          filters: _objectSpread({}, filter.filters),
          allowedFilters: _toConsumableArray(filter.allowedFilters)
        }),
        records: searchResults
      };
    }
  }, {
    key: "getLabels",
    value: function getLabels() {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var labelsMap = new Map();
      rows.forEach(function (row) {
        if (row.language_code) {
          labelsMap.set(row.language_code, {
            languageCode: row.language_code,
            label: row.label
          });
        }
      });
      return Array.from(labelsMap.values());
    }
  }]);

  return Mapper;
}();

var _default = Mapper;
exports["default"] = _default;