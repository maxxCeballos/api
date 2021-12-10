/* eslint-disable max-len */
'use strict';

const express = require('express');
const app = express();

const {connectDB} = require('./database/user');

const userRoute = require('./user/api');
const errorHandler = require('./middlewares/error');
const authenticateToken = require('./middlewares/auth-check');


// Load environment variables
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 5000;

connectDB();

app.set('port', PORT);


app.use('/api/user', authenticateToken, userRoute);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});


