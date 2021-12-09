'use strict';

const {code} = require('./symbols');

// eslint-disable-next-line require-jsdoc
class BadRequest extends Error {
  // eslint-disable-next-line require-jsdoc
  constructor(message = 'Bad Request', ...args) {
    super(message, ...args);

    this[code] = 400;
  };
}


module.exports = BadRequest;
