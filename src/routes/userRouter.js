const express = require('express');
const UserController = require('../controllers/user.controller');
const { userValidationMiddleware } = require('../middlewares/userMiddleware');

const userRouter = express.Router();

userRouter.post('/', userValidationMiddleware, UserController.create);
  
module.exports = userRouter;