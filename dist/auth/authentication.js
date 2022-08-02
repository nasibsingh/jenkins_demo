"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Authentication = /*#__PURE__*/function () {
  function Authentication() {
    _classCallCheck(this, Authentication);
  }

  _createClass(Authentication, null, [{
    key: "hasRight",
    value: function hasRight(user, right) {
      var hasRight = false;
      user.roles.forEach(function (role) {
        if (!hasRight) {
          hasRight = role.hasRight(right);
        }
      });
      return hasRight;
    }
  }, {
    key: "userEffectiveRights",
    value: function userEffectiveRights(user) {
      return Array.from(new Set(user.roles.flatMap(function (role) {
        return role.getRights();
      })));
    }
  }, {
    key: "hasPermission",
    value: function hasPermission(rights, right) {
      return rights.indexOf(right) !== -1;
    }
  }]);

  return Authentication;
}();

var _default = Authentication;
exports["default"] = _default;