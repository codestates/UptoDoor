'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      email: {
        type: Sequelize.STRING
      },
      nickname: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      mainaddress: {
        type: Sequelize.STRING
      },
      main_xvalue: {
        type: Sequelize.FLOAT
      },
      main_yvalue: {
        type: Sequelize.FLOAT
      },
      subaddres: {
        type: Sequelize.STRING
      },
      sub_xvalue: {
        type: Sequelize.FLOAT
      },
      sub_yvalue: {
        type: Sequelize.FLOAT
      },
      mobile: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      gender: {
        type: Sequelize.STRING
      },
      emailcheck: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      billingkey: {
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
    await queryInterface.dropTable('users');
  }
};