/* eslint-disable max-len */
'use strict';

const {UserNotFound} = require('./errors/index');
const mongoose = require('mongoose');
const userSchema = require('./user');
const User = mongoose.model('User_account', userSchema);

// get user by email
const getUser = async (email) => {
  const userDB = await User.find({email: new RegExp('^' + email + '$', 'i')}).exec();

  if (userDB.length === 0) throw new UserNotFound();

  return userDB;
};


// get all users
const getAll = async (page) => {
  const PAGE_SIZE = 2;
  const skip = (page - 1) * PAGE_SIZE;

  return await User.find({})
      .skip(skip)
      .limit(PAGE_SIZE);
};


module.exports = {
  getUser,
  getAll,
};
