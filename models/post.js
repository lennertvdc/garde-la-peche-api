'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    posted_at: DataTypes.DATE,
    img_url: DataTypes.STRING(400),
    fb_url: DataTypes.STRING(400)
  });
  Post.associate = function (models) {
    // associations can be defined here
  };
  return Post;
};