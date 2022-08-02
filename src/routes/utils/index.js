const featureLevel = require('./featureLevel');
const routeBinder = require('./routeBinder');
const routes = require('./routeNavigation');
const httpMethod = require('./httpMethod');

module.exports = {
  ...featureLevel,
  ...routeBinder,
  routes,
  httpMethod,
};
