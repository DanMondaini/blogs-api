const express = require('express');
const PostController = require('../controllers/post.controller');
const { auth } = require('../utils/auth');

const postRouter = express.Router();

postRouter.get('/', auth, PostController.listPosts);
postRouter.get('/:id', auth, PostController.getPostById);

module.exports = postRouter;