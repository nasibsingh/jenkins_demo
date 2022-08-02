const Joi = require('@hapi/joi');
const moment = require('moment');
const {
  joiStringError, joiNumberError, joiBooleanError, joiEmailError,
  joiDateError,
} = require('./apiResponses');


const idValidator = () => (
  Joi.number().integer().positive()
);

const requiredIdValidator = (messageKey, key) => (
  idValidator().required().messages(joiNumberError(messageKey, key))
);
const nullableIdValidator = (messageKey, key) => (
  idValidator().allow(null).messages(joiNumberError(messageKey, key))
);

const moneyValidator = () => (
  Joi.number().positive().precision(2)
);

const requiredMoneyValidator = (messageKey, key) => (
  moneyValidator().required().messages(joiNumberError(messageKey, key))
);

const nullableMoneyValidator = (messageKey, key) => (
  moneyValidator().allow(null).messages(joiNumberError(messageKey, key))
);

const stringValidator = (messageKey, key) => (
  Joi.string().messages(joiStringError(messageKey, key))
);


const requiredStringValidator = (messageKey, key) => (
  Joi.string().required().messages(joiStringError(messageKey, key))
);

const nullableStringValidator = (messageKey, key) => (
  Joi.string().allow(null).messages(joiStringError(messageKey, key))
);

const dateValidator = ({ onlyPast } = {}) => {
  let validator = Joi.date().iso().raw();
  if (onlyPast) {
    validator = validator.max('now');
  }
  return validator;
};

const requiredDateValidator = (messageKey, key, options) => (
  dateValidator(options).required().messages(joiDateError(messageKey, key))
);

const nullableDateValidator = (messageKey, key, options) => (
  dateValidator(options).allow(null).messages(joiDateError(messageKey, key))
);

const validateEndDate = (startDateKey) => (value, helpers) => {
  let startDate;
  if (helpers && helpers.state && helpers.state.ancestors
    && helpers.state.ancestors[0]) {
    startDate = helpers.state.ancestors[0][startDateKey];
  }

  if (startDate && !value) {
    return helpers.error('any.invalid');
  }

  if (startDate && value && moment(startDate).isAfter(moment(value))) {
    return helpers.error('any.invalid');
  }

  return value;
};

const emailValidator = () => (
  Joi.string().lowercase().email()
);

const requiredEmailValidator = (messageKey, key) => (
  emailValidator().required().messages(joiEmailError(messageKey, key))
);

const nullableEmailValidator = (messageKey, key) => (
  emailValidator().allow(null).messages(joiEmailError(messageKey, key))
);

const numberValidator = (messageKey, key) => (
  Joi.number().messages(joiNumberError(messageKey, key))
);

const requiredNumberValidator = (messageKey, key) => (
  Joi.number().required().messages(joiNumberError(messageKey, key))
);

const nullableNumberValidator = (messageKey, key) => (
  Joi.number().allow(null).messages(joiNumberError(messageKey, key))
);

const booleanValidator = (messageKey, key) => (
  Joi.boolean().messages(joiBooleanError(messageKey, key))
);

const requiredBooleanValidator = (messageKey, key) => (
  Joi.boolean().required().messages(joiBooleanError(messageKey, key))
);

const requiredEnumValidator = (options = [], messageKey, key) => (
  Joi.string().valid(...options).required()
    .messages(joiStringError(messageKey, key))
);

const nullableEnumValidator = (options = [], messageKey, key) => (
  Joi.string().valid(...options).allow(null)
    .messages(joiStringError(messageKey, key))
);

const enumValidator = (options = [], messageKey, key) => (
  Joi.string().valid(...options)
    .messages(joiStringError(messageKey, key))
);

const requiredRegexValidator = (pattern, messageKey, key) => (
  Joi.string().regex(pattern).required()
    .messages(joiStringError(messageKey, key))
);

const nullableRegexValidator = (pattern, messageKey, key) => (
  Joi.string().regex(pattern).allow(null)
    .messages(joiStringError(messageKey, key))

);

const regexValidator = (pattern, messageKey, key) => (
  Joi.string().regex(pattern)
    .messages(joiStringError(messageKey, key))
);


module.exports = {
  idValidator,
  requiredIdValidator,
  nullableIdValidator,
  moneyValidator,
  requiredMoneyValidator,
  nullableMoneyValidator,
  stringValidator,
  requiredStringValidator,
  nullableStringValidator,
  dateValidator,
  requiredDateValidator,
  nullableDateValidator,
  validateEndDate,
  emailValidator,
  requiredEmailValidator,
  nullableEmailValidator,
  numberValidator,
  requiredNumberValidator,
  nullableNumberValidator,
  booleanValidator,
  requiredBooleanValidator,
  requiredEnumValidator,
  nullableEnumValidator,
  enumValidator,
  requiredRegexValidator,
  nullableRegexValidator,
  regexValidator,
};
