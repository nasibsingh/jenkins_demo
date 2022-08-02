const Joi = require('@hapi/joi');
const {
  requiredStringValidator, requiredEmailValidator,
} = require('../../../utils');


module.exports = Joi.object(((messageKey) => ({
  firstName: requiredStringValidator(messageKey, 'firstName'),
  lastName: requiredStringValidator(messageKey, 'lastName'),
  email: requiredEmailValidator(messageKey, 'email'),
  password: requiredStringValidator(messageKey, 'password'),
}))('signup')).options({ stripUnknown: true });
