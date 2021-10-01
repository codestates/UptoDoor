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
      mainAddress: {
        type: Sequelize.STRING
      },
      mainAddressDetail: {
        type: Sequelize.STRING
      },
      main_Xvalue: {
        type: Sequelize.FLOAT
      },
      main_Yvalue: {
        type: Sequelize.FLOAT
      },
      subAddress: {
        type: Sequelize.STRING
      },
      subAddressDetail: {
        type: Sequelize.STRING
      },
      sub_Xvalue: {
        type: Sequelize.FLOAT
      },
      sub_Yvalue: {
        type: Sequelize.FLOAT
      },
      mobile: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.STRING
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
      receipt: {
        type: Sequelize.STRING
      },
      login_type: {
        type: Sequelize.STRING
      },
      oauth_token: {
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