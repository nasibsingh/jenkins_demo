/* eslint-disable */
const { routes, featureLevel, put } = require('./utils');
const { Right } = require('../auth');

module.exports = () => {
  put(featureLevel.development,
    Right.general.TEST_API,
    routes.test.TEST_ACTION,
    async () => {
      try {
       return {message : 'hii'};
      } catch (error) {
        console.log(error);
        throw error;
      }
    });
};
