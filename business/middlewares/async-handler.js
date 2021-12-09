'use strict';

// eslint-disable-next-line max-len
module.exports = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
