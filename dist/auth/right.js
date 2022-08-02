"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Rights are the lowest abstraction level items in the authorization system.
 * The decision if user has access to some
 * feature or not is ultimately decided on the fact if that specific user
 * has the required {@link Right}. Rights are
 * never added to database in any form: they are aggregated via {@link Role}s.
 * This allows flexible tuning and
 * changing of {@link Right} items during development:
 * if you find a specific use case where current {@link Right}
 * options are not fitting then add a new one. Just remember to
 * add that {@link Right} to appropriate {@link Role}s.
 */
var Right = /*#__PURE__*/function () {
  function Right() {
    _classCallCheck(this, Right);
  }

  _createClass(Right, null, [{
    key: "allRights",
    value: // helper methods and stuff
    function allRights() {
      return [].concat(Right.getRightArray(this.general), Right.getRightArray(this.user));
    }
  }, {
    key: "userRights",
    value: function userRights() {
      return [].concat(Right.getRightArray(this.general), Right.getRightArray(this.user));
    }
  }, {
    key: "getRightArray",
    value: function getRightArray(rights) {
      return Object.freeze(Object.keys(rights).map(function (key) {
        return rights[key];
      }));
    }
  }, {
    key: "hasPermission",
    value: function hasPermission(rights, val) {
      return rights.indexOf(val) !== -1;
    }
  }, {
    key: "exists",
    value: function exists(val) {
      var index = this.allRights().indexOf(val);
      return index !== -1;
    }
  }]);

  return Right;
}();

_defineProperty(Right, "general", Object.freeze({
  /* General Rights */
  PING: 'PING',
  LOGIN: 'LOGIN',

  /* Test Url only available in development env */
  TEST_API: 'TEST_API'
}));

_defineProperty(Right, "user", Object.freeze({
  /* User Profile */
  FETCH_USER_PROFILE: 'FETCH_USER_PROFILE',
  MODIFY_USER_PROFILE: 'MODIFY_USER_PROFILE'
}));

var _default = Right;
exports["default"] = _default;