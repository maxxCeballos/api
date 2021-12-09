'use strict';

const {code} = require('./symbols');

module.exports = {
  BadRequest: require('./bad-request'),
  Unauthorized: require('./unauthorized'),
  UserAlreadyExists: require('./user-exists'),
  code,
};
