'use strict';

const {UserAlreadyExists, Unauthorized} = require('./errors/index');
const BadRequest = require('./errors/bad-request');
const mongoose = require('mongoose');
const userAccountSchema = require('./account');
const Account = mongoose.model('User_account', userAccountSchema);

const signup = async (email, password) => {
  try {
    await Account.create({email, password});
  } catch (e) {
    if (e.code === 11000 ) throw new UserAlreadyExists();
    if (e.name === 'ValidationError') throw new BadRequest(e.errors['email']);
    throw e;
  }

  return 'Registered user successfully';
};

const login = async (email, password) => {
  const userDB = await Account.findOne({email}).exec();
  if (!userDB) throw new Unauthorized('Login Failed');

  const match = await userDB.isValidPassword(password);
  if (!match) throw new Unauthorized('Login Failed');

  return userDB.getJwtToken();
};


module.exports = {
  signup,
  login,
};
