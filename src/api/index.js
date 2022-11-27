const express = require('express');
const auth = require('../middlewares/auth');
const emojis = require('./emojis');
const links = require('./links');
const login = require('./login');
const logger = require('./log_user_event');
const group = require('./group');
const task = require('./create_task');



const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API - 👋🌎🌍🌏'
  });
});

router.use('/emojis', emojis);

router.use('/links',links);

router.use('/auth',login);

router.use('/logging',logger);

router.use('/group',group);

router.use('/task',task);


module.exports = router;
