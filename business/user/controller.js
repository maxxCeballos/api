'use strict';

const {getUser, getAll} = require('./service');
const asyncHandler = require('../middlewares/async-handler');

const getUserHandler = asyncHandler(async (req, res, next) => {
  const email = req.query?.email;
  const page = req.query?.page ? parseInt(req.query?.page) : 1;

  const response = !email ?
    await getAll(page) :
    await getUser(email.trim());

  res.send({response});
});


module.exports = {
  getUserHandler,
};
