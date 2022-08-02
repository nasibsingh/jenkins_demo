const { Container } = require('typedi');

module.exports = ({ DbTransactions }) => {
  Container.set('DbTransactions', DbTransactions);
};
