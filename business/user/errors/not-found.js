'use strict';

const {code} = require('./symbols');
const {statusCodes, statusReason} = require('response-status-code');

// eslint-disable-next-line require-jsdoc
class UserNotFound extends Error {
  // eslint-disable-next-line require-jsdoc
  constructor(message = statusReason.NOT_FOUND, ...args) {
    super(message, ...args);

    this[code] = statusCodes.NOT_FOUND;
  };
}


module.exports = UserNotFound;

