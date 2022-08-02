"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _convict = _interopRequireDefault(require("convict"));

var _dotenv = _interopRequireDefault(require("dotenv"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
try {
  if (_fs["default"].existsSync('.env')) {
    console.log('Loading configuration from .env');
  } else {
    console.error('.env file do not exist ');
    process.exit(1);
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

_dotenv["default"].config();

var privateKey = _fs["default"].readFileSync("".concat(process.env.JWT_PRIVATE_KEY));

var publicKey = _fs["default"].readFileSync("".concat(process.env.JWT_PUBLIC_KEY));

var configLoader = (0, _convict["default"])({
  env: {
    format: ['prod', 'dev', 'stage'],
    "default": 'dev',
    arg: 'nodeEnv',
    env: 'NODE_ENV'
  },
  port: {
    format: 'port',
    "default": 8080,
    env: 'PORT'
  },
  featureLevel: {
    format: ['development', 'staging', 'production'],
    "default": 'development',
    env: 'FEATURE_LEVEL'
  },
  db: {
    credentials: {
      user: {
        format: String,
        "default": '',
        env: 'DB_USER'
      },
      password: {
        format: String,
        "default": '',
        env: 'DB_PASSWORD'
      }
    },
    host: {
      format: String,
      "default": '',
      env: 'DB_HOST'
    },
    name: {
      format: String,
      "default": '',
      env: 'DB_NAME'
    },
    port: {
      format: 'port',
      "default": 5432,
      env: 'DB_PORT'
    }
  },
  authTokens: {
    privateKey: {
      format: '*',
      "default": privateKey
    },
    publicKey: {
      format: '*',
      "default": publicKey
    },
    issuer: {
      format: String,
      "default": 'hbscale'
    },
    algorithm: {
      format: String,
      "default": 'ES512'
    },
    audience: {
      web: {
        format: String,
        "default": 'WEB'
      },
      app: {
        format: String,
        "default": 'APP'
      }
    },
    version: {
      format: 'int',
      "default": 1
    }
  },
  encryptionKey: {
    format: String,
    "default": '',
    env: 'ENCRYPTION_KEY'
  }
});
configLoader.validate({
  allowed: 'strict'
});
var config = configLoader.getProperties();
var _default = config;
exports["default"] = _default;