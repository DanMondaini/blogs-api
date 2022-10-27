const { BlogPost, Category, User } = require('../models');
// const { errorHandler } = require('../middlewares/errorHandler.js');

const getAll = async () => {
    const postsList = await BlogPost.findAll({
        include: [{ 
            model: User, 
            as: 'user', 
            attributes: { exclude: ['password'] },
         }, 
         
         { 
            model: Category, 
            as: 'categories',
            through: { attributes: [] },
        }],
    });
    return postsList;
};

const postById = async (id) => {
    const posts = await BlogPost.findByPk(id, {
        include: [{ 
            model: User, 
            as: 'user', 
            attributes: { exclude: ['password'] } },
            
    { model: Category, 
      as: 'categories',
      trough: { attributes: [] },
     },
    ],
 });
    return posts;
};

module.exports = {
    getAll,
    postById,
};