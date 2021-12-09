'use strict';

const {code} = require('../auth/errors/symbols');


const notFoundHandler = (req, res, next) => {
  res.status(404).json({message: 'NOT FOUND'});
};


const errorHandler = (err, req, res, next) => {
  const message = err[code] ? err.message : 'Internal Server Error';

  res
      .status(err[code] || 500)
      .json({
        message,
        stack: process.env.NODE_ENV !== 'production' ? err.stack : undefined,
      });
};

module.exports = [
  notFoundHandler,
  errorHandler,
];
