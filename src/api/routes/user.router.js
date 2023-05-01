const express = require('express');
const {login, register, checksession} = require('../controllers/user.controller');
const { isAuth } = require('../../middlewares/auth');
const router = express.Router();


router.post('/login', login);
router.post('/register', register);
router.post('/checksession', [isAuth], checksession);

module.exports = router;
