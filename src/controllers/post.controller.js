const postService = require('../services/post.service');

const listPosts = async (req, res) => {
        const posts = await postService.getAll();
        return res.status(200).json(posts);
};

const getPostById = async (req, res, next) => {
    const { id } = req.params;
    try {
        const getPost = await postService.postById(id);
   
        if (!getPost) {
           return res.status(404).json({ message: 'Post does not exist' });
       }
   
       res.status(200).json(getPost);
    } catch (error) {
       next(error);
    }
   };

   module.exports = {
    listPosts,
    getPostById,
};