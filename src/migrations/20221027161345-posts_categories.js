module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('posts_categories', { 
        postId: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          field: 'post_id',
          references: { model: 'blog_posts', key: 'id' }, 
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
        category_id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
          field: 'category_id',
          references: { model: 'categories', key: 'id' },
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        },
  },
  {
    timestamp: false,
  }
  );
},


  down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('posts_categories');
  }
};