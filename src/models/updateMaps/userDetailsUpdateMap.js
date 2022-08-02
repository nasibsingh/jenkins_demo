const { filterUndefinedFromObject } = require('../../utils');

module.exports = (user) => {
  const map = {
    first_name: user.firstName,
    last_name: user.lastName,
    updated_by: user.updatedBy,
  };

  return filterUndefinedFromObject(map);
};
