const { route } = require('./utils');
const pingRoutes = require('./pingRoutes');
const securityRoutes = require('./securityRoutes');
const userRoutes = require('./userRoutes');
const testApiRoutes = require('./testRoutes');

// guaranteed to get dependencies
module.exports = () => {
  pingRoutes();
  securityRoutes();
  userRoutes();
  testApiRoutes();
  return route;
};
