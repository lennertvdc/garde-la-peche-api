'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {
    posted_at: DataTypes.Integer,
    img_url: DataTypes.TEXT,
    fb_url: DataTypes.TEXT
  }, {
    timestamps: false
  });
  Post.associate = function (models) {
    // associations can be defined here
  };
  return Post;
};