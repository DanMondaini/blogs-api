module.exports = (sequelize, DataTypes) => {
    const BlogPost = sequelize.define('BlogPost', {
    id: { 
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: {
      type: DataTypes.INTEGER,
      foreignKey: true,
     }
    },
    
    {
      timestamps: false,
      tableName: 'blog_posts',
      underscored: true,
    });
  
    BlogPost.associate = (models) => {
      BlogPost.belongsTo(models.User, { 
        foreignKey: 'id', as: 'user' 
      });
    };
  
    return BlogPost;
  };