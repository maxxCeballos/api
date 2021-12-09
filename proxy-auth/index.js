'use strict';

const {createProxyMiddleware} = require('http-proxy-middleware');
const express = require('express');
const app = express();

const authRouter = require('./auth/api');
const errorHandler = require('./middlewares/error');
const authenticateToken = require('./middlewares/auth-check');
const {connectDB} = require('./database/auth');


// Load environment variables
const dotenv = require('dotenv');
dotenv.config();

const PORT = process.env.PORT || 3000;
const PORT_USER = process.env.PORT_USER || 5000;


// connect to database
connectDB();


app.use(express.json());

app.use('/api/auth', authRouter);
app.use('/api/user', authenticateToken, createProxyMiddleware({target: `http://localhost:${PORT_USER}/`, changeOrigin: false}));

app.use(errorHandler);


app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
