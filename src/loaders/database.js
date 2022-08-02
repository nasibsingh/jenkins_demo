/* eslint-disable no-console */
const cmd = require('node-cmd');
const Promise = require('bluebird');
const { argv } = require('yargs');
const Database = require('../db');

const getAsyncCmd = Promise.promisify(cmd.get, { multiArgs: true, context: cmd });

const migrate = async () => {
  console.info('Initializing database migrations...');
  const data = await getAsyncCmd('npm run db:migrate');
  data.forEach((line) => { console.info(line); });
  console.log('Database migrations complete.');
};

const clean = async () => {
  console.warn('CREATING DATABASE FROM SCRATCH, ALL DATA WILL BE LOST!');
  const data = await getAsyncCmd('npm run db:clean');
  data.forEach((line) => { console.info(line); });
  console.log('Data dropped, proceeding');
};

module.exports = async () => {
  const db = new Database();
  try {
    await db.testConnection();

    switch (argv.migrate) {
      case 'migrate':
        await migrate();
        break;
      case 'clean_and_migrate':
        await clean();
        await migrate();
        break;
      default:
        console.info('No database migrations requested, skipping migrations.');
        break;
    }
  } catch (e) {
    console.error(e.message);
    process.exit(1);
  }
  return db;
};
