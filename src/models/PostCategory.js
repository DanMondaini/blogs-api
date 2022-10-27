module.exports = (sequelize, DataTypes) => {
    const PostCategory = sequelize.define('PostCategory', {
      postId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          foreignKey: true,
          },
        categoryId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          foreignKey: true,
        }
    },
    
    {
      timestamps: false,
      tableName: 'posts_categories',
      underscored: true,
    });
    
    PostCategory.associate = (models) => {
      models.Category.belongsToMany(models.BlogPost, { 
        as: 'blogPosts',
        foreignKey: 'categoryId',
        through: PostCategory,
        otherKey: 'postId', 
      });
      
      models.BlogPost.belongsToMany(models.Category, { 
        as: 'categories',
        foreignKey: 'postId',
        through: PostCategory,
        otherKey: 'categoryId',
      });
  
  
    }
  
    return PostCategory;
  };