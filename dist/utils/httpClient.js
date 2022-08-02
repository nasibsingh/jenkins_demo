"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiCall = exports.HttpStatus = exports.HttpMethods = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var fetch = function fetch() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Promise.resolve().then(function () {
    return _interopRequireWildcard(require('node-fetch'));
  }).then(function (_ref) {
    var fetch = _ref["default"];
    return fetch.apply(void 0, args);
  });
};

var HttpStatus = {
  Ok: 200,
  BadRequest: 400,
  Unauthorized: 401,
  Forbidden: 403,
  NotFound: 404
};
exports.HttpStatus = HttpStatus;
var HttpMethods = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  PATCH: 'PATCH',
  DELETE: 'DELETE'
};
exports.HttpMethods = HttpMethods;

var apiCall = function apiCall(url) {
  var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : HttpMethods.GET;
  var body = arguments.length > 2 ? arguments[2] : undefined;
  var headers = arguments.length > 3 ? arguments[3] : undefined;
  var apiBody;

  if (body) {
    apiBody = JSON.stringify(body);
  }

  return new Promise(function (resolve, reject) {
    fetch(url, {
      body: apiBody,
      headers: headers,
      method: method
    }).then(function (response) {
      resolve(response);
    })["catch"](function (error) {
      reject(error);
    });
  });
};

exports.apiCall = apiCall;