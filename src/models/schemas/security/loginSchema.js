const Joi = require('@hapi/joi');
const config = require('../../../config');
const { requiredStringValidator, nullableEnumValidator } = require('../../../utils');

module.exports = Joi.object(((messageKey) => ({
  email: requiredStringValidator(messageKey, 'email'),
  password: requiredStringValidator(messageKey, 'password'),
  aud: nullableEnumValidator([
    config.authTokens.audience.web,
    config.authTokens.audience.app],
  messageKey, 'aud'),
}))('login')).options({ stripUnknown: true });
