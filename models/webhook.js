'use strict';
module.exports = (sequelize, DataTypes) => {
  const Webhook = sequelize.define('Webhook', {
    url: DataTypes.STRING(400)
  }, {});
  Webhook.associate = function(models) {
    // associations can be defined here
  };
  return Webhook;
};