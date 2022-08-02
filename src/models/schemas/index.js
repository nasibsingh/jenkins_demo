const securitySchemas = require('./security');
const userSchemas = require('./user');

module.exports = {
  ...securitySchemas,
  ...userSchemas,
};
