/* eslint-disable max-classes-per-file */
class BadRequest extends Error {
  constructor(msg) {
    super(msg);
    this.status = 400;
  }
}

class Unauthorized extends Error {
  constructor(msg) {
    super(msg);
    this.status = 401;
  }
}

class Forbidden extends Error {
  constructor(msg) {
    super(msg);
    this.status = 403;
  }
}


class NotFound extends Error {
  constructor(msg) {
    super(msg);
    this.status = 404;
  }
}

class Conflict extends Error {
  constructor(msg) {
    super(msg);
    this.status = 409;
  }
}

class UpgradeRequired extends Error {
  constructor(msg) {
    super(msg);
    this.status = 426;
  }
}

class ServerError extends Error {
  constructor(msg) {
    super(msg);
    this.status = 500;
  }
}

module.exports = {
  BadRequest,
  Unauthorized,
  Forbidden,
  NotFound,
  Conflict,
  UpgradeRequired,
  ServerError,
};
