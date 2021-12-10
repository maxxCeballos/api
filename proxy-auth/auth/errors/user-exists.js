'use strict';

const {code} = require('./symbols');
const {statusCodes, statusReason} = require('response-status-code');

// eslint-disable-next-line require-jsdoc
class UserAlreadyExists extends Error {
  // eslint-disable-next-line require-jsdoc
  constructor(message = statusReason.CONFLICT, ...args) {
    super(message, ...args);

    this[code] = statusCodes.CONFLICT;
  };
}


module.exports = UserAlreadyExists;
