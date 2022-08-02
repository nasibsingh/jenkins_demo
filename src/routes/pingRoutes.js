const {
  routes, featureLevel, get, publicGet,
} = require('./utils');
const { Right } = require('../auth');
const { messageResponse } = require('../utils');

/**
   * Token/Health Check endpoints
 * */
module.exports = () => {
  publicGet(featureLevel.production,
    routes.healthCheck,
    async () => messageResponse('ok'));

  get(featureLevel.production,
    Right.general.PING,
    routes.ping,
    async () => messageResponse('ok'));
};
