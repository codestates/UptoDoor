'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('stores', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.TEXT
      },
      number: {
        type: Sequelize.STRING
      },
      address: {
        type: Sequelize.STRING
      },
      address_detail: {
        type: Sequelize.STRING
      },
      xvalue: {
        type: Sequelize.FLOAT
      },
      yvalue: {
        type: Sequelize.FLOAT
      },
      category: {
        type: Sequelize.STRING
      },
      introduce: {
        type: Sequelize.STRING
      },
      open_time: {
        type: Sequelize.STRING
      },
      close_time: {
        type: Sequelize.STRING
      },
      Business_paper: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('stores');
  }
};