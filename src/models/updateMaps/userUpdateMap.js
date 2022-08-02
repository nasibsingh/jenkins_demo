const { filterUndefinedFromObject } = require('../../utils');

module.exports = (user) => {
  const map = {
    status: user.status,
    updated_by: user.updatedBy,
  };

  return filterUndefinedFromObject(map);
};
