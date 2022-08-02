/* eslint-disable no-console */
const databaseLoader = require('./database');
const dependencyInjectorLoader = require('./dependencyInjector');
const expressLoader = require('./express');


module.exports = async ({ expressApp, isCron }) => {
  const DbTransactions = await databaseLoader();
  console.info('✌ DB connected and loaded successfully!');

  await dependencyInjectorLoader({ DbTransactions });
  console.info('✌️ Dependency Injector loaded');

  if (!isCron) {
    await expressLoader({ app: expressApp });
    console.info('✌️ Express loaded');
  }
};
