"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isApplicableFeatureLevel = exports.featureLevelValue = exports.featureLevel = void 0;

var _config = _interopRequireDefault(require("../../config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var featureLevelValue = Object.freeze({
  development: 0,
  staging: 1,
  production: 2
});
exports.featureLevelValue = featureLevelValue;
var featureLevel = Object.freeze({
  development: 'development',
  staging: 'staging',
  production: 'production'
});
exports.featureLevel = featureLevel;

var isApplicableFeatureLevel = function isApplicableFeatureLevel(level) {
  return featureLevelValue[_config["default"].featureLevel] <= featureLevelValue[level];
};

exports.isApplicableFeatureLevel = isApplicableFeatureLevel;