'use strict';
module.exports = (sequelize, DataTypes) => {
  const image = sequelize.define('image', {
    fb_id: DataTypes.STRING,
    fb_url: DataTypes.STRING(400),
    img_url: DataTypes.STRING(400),
    img_base64: DataTypes.TEXT('long')
  }, {});
  image.associate = function(models) {
    // associations can be defined here
  };
  return image;
};
