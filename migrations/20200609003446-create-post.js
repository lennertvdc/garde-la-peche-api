'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      posted_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      img_url: {
        type: Sequelize.STRING(400),
        allowNull: false
      },
      fb_url: {
        type: Sequelize.STRING(400),
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};