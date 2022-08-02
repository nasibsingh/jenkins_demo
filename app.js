/* eslint-disable no-console */
const express = require('express');
const moment = require('moment');
const config = require('./src/config');

async function startServer() {
  const app = express();

  const now = moment();
  console.log('Initializing application');
  // eslint-disable-next-line global-require
  await require('./src/loaders')({ expressApp: app });

  app.listen(config.port, async () => {
    try {
      console.log(`
      ####################################################################
      🛡️  Server listening on port: ${config.port} with feature level ${config.featureLevel}, 
          server start took ${moment().diff(now)} ms 🛡️ 
      ####################################################################`);
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
  });
}

startServer();
