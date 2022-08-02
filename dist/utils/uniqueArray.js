"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.uniqueByProp = exports.uniqueById = void 0;

/**
 * using ES6 Map
 * */
var uniqueByProp = function uniqueByProp(prop) {
  return function (arr) {
    return Array.from(arr.reduce(function (acc, item) {
      return item && item[prop] && acc.set(item[prop], item), acc;
    }, // using map (preserves ordering)
    new Map()).values());
  };
};

exports.uniqueByProp = uniqueByProp;
var uniqueById = uniqueByProp('id');
exports.uniqueById = uniqueById;