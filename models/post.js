// Untuk membuat model
// npx sequelize model:generate --name Post --attributes title:string,content:string,likes:string

'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Post.init({
    postId: {
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId : DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    likes: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};