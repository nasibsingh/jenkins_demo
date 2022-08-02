const Password = require('./password');
const PasswordHash = require('./passwordHash');
const Filter = require('./filter');
const schemas = require('./schemas');
const updateMaps = require('./updateMaps');

module.exports = {
  Password,
  PasswordHash,
  Filter,
  ...schemas,
  ...updateMaps,
};
