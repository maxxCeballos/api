'use strict';

const {code} = require('./symbols');

// eslint-disable-next-line require-jsdoc
class UserNotFound extends Error {
  // eslint-disable-next-line require-jsdoc
  constructor(message = 'User Not Found', ...args) {
    super(message, ...args);

    this[code] = 404;
  };
}


module.exports = UserNotFound;

