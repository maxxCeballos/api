'use strict';

const {code} = require('./symbols');

/**
 * Create Unauthorized error with code 401
 */
class Unauthorized extends Error {
  /**
 * Unauthorized error constructor.
 * @param {int} message Message error.
 * @param {int} ...args possible errors arguments.
 */
  constructor(message = 'Unauthorized', ...args) {
    super(message, ...args);

    this[code] = 401;
  };
}


module.exports = Unauthorized;
