"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _right = _interopRequireDefault(require("./right"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Roles of the authorization system.
 * Each user will have one or more {@link Role}s linked to them either directly
 * or via their usergroups. Each {@link Role} contain one
 * or more {@link Right}s which are ultimately determine
 * if user has access to certain features etc.
 *
 * Please note that in addition to right based authorization
 * there is also contextual authorization going on, this means
 * that certain {@link Right}s are contextual in nature: you may
 * be allowed to see some data (eg. students) but your
 * view might be restricted to only specific items
 * (like the students of your own company).
 */
var Role = /*#__PURE__*/function () {
  function Role(role) {
    _classCallCheck(this, Role);

    _defineProperty(this, "roles", Object.freeze(['USER', 'NO_RIGHTS']));

    _defineProperty(this, "roleIds", Object.freeze({
      USER: 1,
      NO_RIGHTS: 0
    }));

    _defineProperty(this, "USER", _right["default"].userRights());

    _defineProperty(this, "NO_RIGHTS", []);

    _defineProperty(this, "rights", void 0);

    _defineProperty(this, "role", void 0);

    if (this.roles.indexOf(role) === -1) {
      throw new _utils.HttpException.BadRequest((0, _utils.formatErrorResponse)('role', 'notFound'));
    }

    this.role = role;
    this.rights = this[role];
  }

  _createClass(Role, [{
    key: "hasRight",
    value: function hasRight(right) {
      return this.rights && this.rights.indexOf(right) !== -1;
    }
  }, {
    key: "getRights",
    value: function getRights() {
      return this.rights;
    }
  }, {
    key: "getId",
    value: function getId() {
      return this.roleIds[this.role] || 0;
    }
  }]);

  return Role;
}();

_defineProperty(Role, "roleValues", Object.freeze({
  USER: 'USER'
}));

var _default = Role;
exports["default"] = _default;