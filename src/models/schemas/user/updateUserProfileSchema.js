const Joi = require('@hapi/joi');
const {
  stringValidator,
} = require('../../../utils');

module.exports = Joi.object(((messageKey) => ({
  firstName: stringValidator(messageKey, 'firstName'),
  lastName: stringValidator(messageKey, 'lastName'),
}))('updateUserProfile')).options({ stripUnknown: true });
