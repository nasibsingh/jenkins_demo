const bcrypt = require('bcrypt');
const { HttpException, formatErrorResponse } = require('../utils');

class Password {
  constructor(password) {
    this.password = password;
    this.hashingRounds = 11;
  }

  async hashPassword() {
    try {
      const hash = await bcrypt.hash(this.password, this.hashingRounds);
      return hash;
    } catch (e) {
      throw new HttpException.BadRequest(formatErrorResponse('password', 'unableToHash'));
    }
  }
}

module.exports = Password;
