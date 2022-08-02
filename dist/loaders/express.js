"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _cors = _interopRequireDefault(require("cors"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _routes = _interopRequireDefault(require("../routes"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = function _default(_ref) {
  var app = _ref.app;
  app.use((0, _morgan["default"])(':method :url :status :response-time ms')); // Useful if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
  // It shows the real origin IP in the heroku or Cloudwatch logs

  app.enable('trust proxy'); // Enable Cross Origin Resource Sharing to all origins by default

  app.use((0, _cors["default"])({
    methods: 'GET,PUT,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type,Authorization,X-Requested-With,Content-Length,Accept,Origin',
    exposedHeaders: 'Authorization',
    credentials: true
  })); // Middleware that transforms the raw string of req.body into json

  app.use(_bodyParser["default"].json()); // Middleware to handle form data requests for file upload

  app.use(_bodyParser["default"].urlencoded({
    extended: true
  })); // Load API routes

  app.use((0, _routes["default"])()); // / catch 404 and forward to error handler

  app.use(function (req, res, next) {
    var err = new _utils.HttpException.NotFound((0, _utils.formatErrorResponse)('general', 'notFound'));
    next(err);
  }); // / error handlers

  /* eslint-disable-next-line no-unused-vars */

  app.use(function (err, req, res, next) {
    // console.error(err);
    res.status(err.status || 500);
    res.json((0, _utils.messageResponse)(err.message));
  });
};

exports["default"] = _default;