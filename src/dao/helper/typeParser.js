const moment = require('moment');

const parserId = (id) => (
  id ? parseInt(id, 10) : null
);
const parserDate = (date) => (
  date ? moment(date) : null
);

const parserBoolean = (value) => (!!value);

const parserInteger = (value) => (
  (value !== null && value !== undefined) ? parseInt(value, 10) : null
);

const parserFloat = (value) => (
  (value !== null && value !== undefined) ? parseFloat(value, 10) : null
);

const parserJson = (value) => {
  if (!value) return null;
  try {
    return JSON.parse(value);
  } catch (error) {
    console.log('Error parsing Json: ', error);
    return null;
  }
};

module.exports = {
  parserId,
  parserDate,
  parserBoolean,
  parserInteger,
  parserFloat,
  parserJson,
};
