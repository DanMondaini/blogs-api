const express = require('express');
const UserController = require('../controllers/user.controller');
const { auth } = require('../utils/auth');
const { userValidationMiddleware } = require('../middlewares/userMiddleware');

const userRouter = express.Router();

userRouter.post('/', userValidationMiddleware, UserController.create);
userRouter.get('/', auth, UserController.getAll);
userRouter.get('/:id', auth, UserController.getById);
  
module.exports = userRouter;