'use strict';

const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const userAccountSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: {unique: true},
    validate: [validator.isEmail, 'Please enter a valid email address'],
  },
  password: {type: String, required: true},
});


// pre-save hook
userAccountSchema.pre('save', function(next) {
  // eslint-disable-next-line no-invalid-this
  const user = this;

  // only hash the password if is new (or modified)
  if (!user.isModified('password')) return next();
  bcrypt.hash(user.password, 12, (err, hash) => {
    if (err) {
      next(err);
      return;
    }

    user.password = hash;
    next();
  });
});


// method to verify password validity
userAccountSchema.methods.isValidPassword = async function(password) {
  return await bcrypt.compare(password, this.password);
};


// Return JSON web token
userAccountSchema.methods.getJwtToken = function() {
  // expires in 10 seconds
  return jwt.sign({
    exp: parseInt(process.env.JWT_EXPIRES_TIME),
    data: this.email,
  }, process.env.TOKEN_SECRET);

  // return jwt.sign(this.email, process.env.TOKEN_SECRET, { expiresIn: '1h' });
};


module.exports = userAccountSchema;
