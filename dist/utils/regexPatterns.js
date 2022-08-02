"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TIME_REGEX = exports.DATE_REGEX = void 0;
var DATE_REGEX = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
exports.DATE_REGEX = DATE_REGEX;
var TIME_REGEX = /^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
exports.TIME_REGEX = TIME_REGEX;