"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeUrl = exports.isUndefined = exports.isNull = exports.getUpdatableDate = exports.getFileContent = exports.getEnumArrayFromObj = exports.formatStr = exports.formatDate = exports.filterUndefinedFromObject = exports.deleteFile = exports.convertToStartOfDay = exports.convertToIsoDateTime = exports.convertToIsoDate = exports.convertToEndOfDay = exports.convertIsoDatoToIsoDateTime = exports.checkIfValidDate = void 0;

var _moment = _interopRequireDefault(require("moment"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var isUndefined = function isUndefined(value) {
  return value === undefined;
};

exports.isUndefined = isUndefined;

var isNull = function isNull(value) {
  return value === null;
};

exports.isNull = isNull;

var convertIsoDatoToIsoDateTime = function convertIsoDatoToIsoDateTime(date) {
  if (isUndefined(date)) return undefined;

  if (!date) {
    return null;
  }

  return "".concat(date, "T").concat((0, _moment["default"])().format('HH:mm:ssZ'));
};

exports.convertIsoDatoToIsoDateTime = convertIsoDatoToIsoDateTime;

var convertToIsoDateTime = function convertToIsoDateTime(date) {
  if (isUndefined(date)) return undefined;

  if (!date) {
    return null;
  }

  return (0, _moment["default"])(date).format('YYYY-MM-DDTHH:mm:ssZ');
};

exports.convertToIsoDateTime = convertToIsoDateTime;

var convertToIsoDate = function convertToIsoDate(date) {
  if (isUndefined(date)) return undefined;

  if (!date) {
    return null;
  }

  return (0, _moment["default"])(date).format('YYYY-MM-DD');
};

exports.convertToIsoDate = convertToIsoDate;

var checkIfValidDate = function checkIfValidDate(date) {
  if (!date) return false;
  return (0, _moment["default"])(date).isValid();
};

exports.checkIfValidDate = checkIfValidDate;

var convertToStartOfDay = function convertToStartOfDay(date) {
  if (!date) return null;
  return (0, _moment["default"])(date).set({
    h: 0,
    m: 0,
    s: 0,
    ms: 0
  });
};

exports.convertToStartOfDay = convertToStartOfDay;

var convertToEndOfDay = function convertToEndOfDay(date) {
  if (!date) return null;
  return (0, _moment["default"])(date).set({
    h: 23,
    m: 59,
    s: 59,
    ms: 999
  });
};

exports.convertToEndOfDay = convertToEndOfDay;

var getUpdatableDate = function getUpdatableDate(value) {
  if (isNull(value)) return null;
  if (isUndefined(value)) return undefined;
  return (0, _moment["default"])(convertIsoDatoToIsoDateTime(value));
};

exports.getUpdatableDate = getUpdatableDate;

var filterUndefinedFromObject = function filterUndefinedFromObject(obj) {
  return Object.keys(obj).reduce(function (acc, key) {
    if (!isUndefined(obj[key])) {
      acc[key] = obj[key];
    }

    return acc;
  }, {});
};

exports.filterUndefinedFromObject = filterUndefinedFromObject;

var deleteFile = function deleteFile(filePath) {
  return new Promise(function (resolve, reject) {
    if (!filePath) {
      reject(new Error('Invalid Path'));
    }

    _fs["default"].unlink(filePath, function (err) {
      if (err) reject(err); // if no error, file has been deleted successfully

      resolve(true);
    });
  });
};

exports.deleteFile = deleteFile;

var getFileContent = function getFileContent(resourceDir, relativePath) {
  return new Promise(function (resolve, reject) {
    _fs["default"].readFile(_path["default"].join(resourceDir, relativePath), 'utf8', function (err, data) {
      if (err) {
        reject(err);
      }

      resolve(data);
    });
  });
};

exports.getFileContent = getFileContent;

var formatStr = function formatStr(str) {
  return str || '';
};

exports.formatStr = formatStr;

var formatDate = function formatDate(date) {
  return date ? (0, _moment["default"])(date).format('DD/MM/YYYY') : '';
};

exports.formatDate = formatDate;

var sanitizeUrl = function sanitizeUrl(url) {
  if (!url) return url;
  var newUrl = url;

  if (url.endsWith('/')) {
    newUrl = url.substring(0, url.length - 1);
  }

  return newUrl;
};

exports.sanitizeUrl = sanitizeUrl;

var getEnumArrayFromObj = function getEnumArrayFromObj(enumObj) {
  if (!enumObj) return null;
  return Object.keys(enumObj).map(function (key) {
    return enumObj[key];
  });
};

exports.getEnumArrayFromObj = getEnumArrayFromObj;