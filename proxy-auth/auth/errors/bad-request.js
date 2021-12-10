'use strict';

const {code} = require('./symbols');
const {statusCodes, statusReason} = require('response-status-code');

// eslint-disable-next-line require-jsdoc
class BadRequest extends Error {
  // eslint-disable-next-line require-jsdoc
  constructor(message = statusReason.BAD_REQUEST, ...args) {
    super(message, ...args);

    this[code] = statusCodes.BAD_REQUEST;
  };
}


module.exports = BadRequest;
