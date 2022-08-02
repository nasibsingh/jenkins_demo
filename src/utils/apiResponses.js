
const formatResponse = (api, type, message) => (`${type}.${api}.${message}`);

const formatSuccessResponse = (api, message) => (formatResponse(api, 'success', message));
const formatErrorResponse = (api, message) => (formatResponse(api, 'error', message));

const messageResponse = (message) => ({ message: (message || null) });

const joiGeneralError = (schema, field) => {
  const invalid = formatErrorResponse(schema, `${field}.invalid`);
  return ({
    'any.required': formatErrorResponse(schema, `${field}.required`),
    'any.only': invalid,
    'any.invalid': invalid,
    'array.unique': invalid,
    'array.base': formatErrorResponse(schema, `${field}.invalidArray`),
    'array.includesRequiredUnknowns': formatErrorResponse(schema, `${field}.emptyArray`),
  });
};

const joiStringError = (schema, field) => {
  const invalid = formatErrorResponse(schema, `${field}.invalid`);
  return ({
    'string.base': invalid,
    'string.empty': formatErrorResponse(schema, `${field}.empty`),
    'string.length': invalid,
    'string.pattern.base': invalid,
    'string.domain': invalid,
    ...joiGeneralError(schema, field),
  });
};

const joiEmailError = (schema, field) => ({
  ...joiStringError(schema, field),
  'string.email': formatErrorResponse(schema, `${field}.invalid`),
});

const joiNumberError = (schema, field) => {
  const invalid = formatErrorResponse(schema, `${field}.invalid`);
  return ({
    ...joiGeneralError(schema, field),
    'number.base': invalid,
    'number.positive': invalid,
    'number.integer': invalid,
    'number.min': invalid,
    'number.max': invalid,
  });
};

const joiBooleanError = (schema, field) => {
  const invalid = formatErrorResponse(schema, `${field}.invalid`);
  return ({
    ...joiGeneralError(schema, field),
    'boolean.base': invalid,
  });
};

const joiDateError = (schema, field) => {
  const invalid = formatErrorResponse(schema, `${field}.invalid`);
  return ({
    ...joiGeneralError(schema, field),
    'date.base': invalid,
    'date.format': invalid,
    'date.max': invalid,
    'date.min': invalid,
  });
};

module.exports = {
  formatResponse,
  formatSuccessResponse,
  formatErrorResponse,
  messageResponse,
  joiStringError,
  joiEmailError,
  joiNumberError,
  joiBooleanError,
  joiDateError,
};
