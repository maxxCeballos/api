'use strict';

const {code} = require('./symbols');

// eslint-disable-next-line require-jsdoc
class UserAlreadyExists extends Error {
  // eslint-disable-next-line require-jsdoc
  constructor(message = 'User Already Exists', ...args) {
    super(message, ...args);

    this[code] = 409;
  };
}


module.exports = UserAlreadyExists;
