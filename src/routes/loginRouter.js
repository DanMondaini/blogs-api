const express = require('express');
const LoginController = require('../controllers/login.controller');

const loginRouter = express.Router();

loginRouter.post('/', LoginController.userValidation);

module.exports = loginRouter;