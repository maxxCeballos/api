/* eslint-disable max-len */
'use strict';

const {statusCodes, statusReason} = require('response-status-code');
const asyncHandler = require('../middlewares/async-handler');
const BadRequest = require('./errors/bad-request');
const Service = require('./service');

const signupHandler = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!password) throw new BadRequest('Password not provided');

  await Service.signup(email, password);

  res.status(statusCodes.CREATED).send({msg: statusReason.CREATED});
});


const loginHandler = asyncHandler(async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) throw new BadRequest('Email or Password not provided');

  const response = await Service.login(email, password);

  res.send({response});
});


module.exports = {
  signupHandler,
  loginHandler,
};
