
const config = require('../../config');

const featureLevelValue = Object.freeze({
  development: 0,
  staging: 1,
  production: 2,
});

const featureLevel = Object.freeze({
  development: 'development',
  staging: 'staging',
  production: 'production',
});

const isApplicableFeatureLevel = (level) => (
  featureLevelValue[config.featureLevel] <= featureLevelValue[level]
);

module.exports = {
  featureLevel, isApplicableFeatureLevel,
};
