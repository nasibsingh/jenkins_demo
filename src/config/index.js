/* eslint-disable no-console */
const fs = require('fs');

try {
  if (fs.existsSync('.env')) {
    console.log('Loading configuration from .env');
  } else {
    console.error('.env file do not exist ');
    process.exit(1);
  }
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

require('dotenv').config();
const convict = require('convict');

const privateKey = fs.readFileSync(`${process.env.JWT_PRIVATE_KEY}`);
const publicKey = fs.readFileSync(`${process.env.JWT_PUBLIC_KEY}`);

const config = convict({
  env: {
    format: ['prod', 'dev', 'stage'],
    default: 'dev',
    arg: 'nodeEnv',
    env: 'NODE_ENV',
  },
  port: {
    format: 'port',
    default: 8080,
    env: 'PORT',
  },
  featureLevel: {
    format: ['development', 'staging', 'production'],
    default: 'development',
    env: 'FEATURE_LEVEL',
  },
  db: {
    credentials: {
      user: {
        format: String,
        default: '',
        env: 'DB_USER',
      },
      password: {
        format: String,
        default: '',
        env: 'DB_PASSWORD',
      },
    },
    host: {
      format: String,
      default: '',
      env: 'DB_HOST',
    },
    name: {
      format: String,
      default: '',
      env: 'DB_NAME',
    },
    port: {
      format: 'port',
      default: 5432,
      env: 'DB_PORT',
    },
  },
  authTokens: {
    privateKey: {
      format: '*',
      default: privateKey,
    },
    publicKey: {
      format: '*',
      default: publicKey,
    },
    issuer: {
      format: String,
      default: 'hbscale',
    },
    algorithm: {
      format: String,
      default: 'ES512',
    },
    audience: {
      web: {
        format: String,
        default: 'WEB',
      },
      app: {
        format: String,
        default: 'APP',
      },
    },
    version: {
      format: 'int',
      default: 1,
    },
  },
  encryptionKey: {
    format: String,
    default: '',
    env: 'ENCRYPTION_KEY',
  },
});

config.validate({ allowed: 'strict' });

module.exports = config.getProperties();
