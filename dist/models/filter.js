"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

var Filter = /*#__PURE__*/function () {
  function Filter() {
    _classCallCheck(this, Filter);
  }

  _createClass(Filter, null, [{
    key: "getAllowedFilter",
    value: function getAllowedFilter(filter) {
      switch (filter) {
        default:
          return Object.freeze([]);
      }
    }
  }, {
    key: "fromRequest",
    value: function fromRequest(req, type) {
      var isExport = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var filter = {
        allowedFilters: _toConsumableArray(Filter.getAllowedFilter(type))
      };
      var params = req.query;
      var page = params.page ? Math.abs(parseInt(params.page, 10)) - 1 : 0;
      var limit = params.limit ? parseInt(params.limit, 10) : 50;
      filter.page = page;
      filter.limit = limit;
      params.order && (filter.order = params.order);
      params.direction && (filter.direction = params.direction);
      params.allResults && (filter.allResults = params.allResults.toLowerCase() === 'true');
      if (isExport) filter.allResults = true;
      filter.filters = {};

      if (params.filter) {
        filter.allowedFilters.forEach(function (key) {
          if (params.filter[key]) {
            filter.filters[key] = params.filter[key];
          }
        });
      }

      return _objectSpread(_objectSpread({}, filter), {}, {
        allowedFilters: _toConsumableArray(filter.allowedFilters),
        filters: _objectSpread({}, filter.filters)
      });
    }
  }]);

  return Filter;
}();

_defineProperty(Filter, "types", Object.freeze({}));

var _default = Filter;
exports["default"] = _default;