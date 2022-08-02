const { Container } = require('typedi');


class CronService {
  constructor() {
    this.txs = Container.get('DbTransactions');
  }
}


module.exports = CronService;
