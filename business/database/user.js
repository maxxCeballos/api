/* eslint-disable max-len */
'use strict';

const mongoose = require('mongoose');

// Connection URI
const uri = 'mongodb+srv://challenge:conexa123@cluster-conexa.nggze.mongodb.net/auth?retryWrites=true&w=majority';

const connectDB = async (req, res, next) => {
  try {
    mongoose.connection.on('error', (err) => {
      console.log('Error connect DB');
    });

    mongoose.connection.on('open', (err) => {
      console.log('Success connect DB');
    });

    await mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});
  } catch (e) {
    console.log(e);
  }
};


module.exports = {
  connectDB,
};
