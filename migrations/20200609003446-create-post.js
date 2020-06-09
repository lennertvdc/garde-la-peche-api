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
        type: Sequelize.INTEGER,
        allowNull: false
      },
      img_url: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      fb_url: {
        type: Sequelize.TEXT,
        allowNull: false
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};