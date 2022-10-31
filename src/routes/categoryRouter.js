const express = require('express');
const CategoryController = require('../controllers/category.controller');
const { auth } = require('../utils/auth');

const categoryRouter = express.Router();

categoryRouter.get('/', auth, CategoryController.getAll);

module.exports = categoryRouter;