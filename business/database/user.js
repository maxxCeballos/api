/* eslint-disable max-len */
'use strict';

const mongoose = require('mongoose');

const connectDB = async (req, res, next) => {
  try {
    mongoose.connection.on('error', (err) => {
      console.log('Error connect DB');
    });

    mongoose.connection.on('open', (err) => {
      console.log('Success connect DB');
    });

    await mongoose.connect(process.env.DB_CONNECTION_STRING, {useNewUrlParser: true, useUnifiedTopology: true});
  } catch (e) {
    console.log(e);
  }
};


module.exports = {
  connectDB,
};
