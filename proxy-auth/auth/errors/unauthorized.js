'use strict';

const {code} = require('./symbols');
const {statusCodes, statusReason} = require('response-status-code');

/**
 * Create Unauthorized error with code 401
 */
class Unauthorized extends Error {
  /**
 * Unauthorized error constructor.
 * @param {int} message Message error.
 * @param {int} ...args possible errors arguments.
 */
  constructor(message = statusReason.UNAUTHORIZED, ...args) {
    super(message, ...args);

    this[code] = statusCodes.UNAUTHORIZED;
  };
}


module.exports = Unauthorized;
