const express = require('express');
const user = require('../controller/auth.controller');
const router = express.Router();
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()
const auth = require('../middlewares/auth');
// register
router.post('/register', user.register);
// login
router.post('/login', user.login);
// all users
router.get('/', auth, user.all);

module.exports = router;