/* eslint-disable no-console */
// const { Container } = require('typedi');
const moment = require('moment');
const { argv } = require('yargs');
// const { CronService } = require('./src/services');

// const CRON_JOB_TYPES = Object.freeze({});

async function startCron() {
  const now = moment();
  const { cronJobType } = argv;
  console.log(` 
        ####################################################################
        🛡️  Initializing Cron  Type : ${cronJobType}  🛡️ 
        ####################################################################
    `);
  // eslint-disable-next-line global-require
  await require('./src/loaders')({ isCron: true });
  console.log('');
  // const cronService = Container.get(CronService);
  switch (cronJobType) {
    default:
      console.log(`No cron job type ${cronJobType} found`);
  }

  console.log(` 
        ####################################################################
        🛡️  Cron start took ${moment().diff(now)} ms 🛡️ 
        ####################################################################
    `);
  process.exit();
}

startCron();
