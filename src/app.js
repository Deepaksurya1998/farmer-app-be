const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client')
const auth = require('./middlewares/auth');
const user = require('./controller/auth.controller');
const prisma = new PrismaClient()
const router = require('express').Router();
require('dotenv').config();

const middlewares = require('./middlewares');
const api = require('./api');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
router.post('/api/v1/r/regirster', user.register);
router.post('/login', user.login);
router.get('/', auth, user.all);
// all users
//router.get('/', auth, user.all);
app.get('/', async (req, res) => {
  // await prisma.Links.create({
  //   data: {
  //     title:'title',
  //     href:'https://docs.google.com/spreadsheets/d/1N_3gFUw92vSsflMhNgzXCPuGvAlkgAQDL6ZNF0MDo0U/edit#gid=0'
  //   },
  // })
  res.json({
    message: '🦄🌈✨👋🌎🌍🌏✨🌈🦄'
  });
});

app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
