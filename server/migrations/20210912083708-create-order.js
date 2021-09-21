'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      order_time: {
        type: Sequelize.STRING
      },
      user_email: {
        type: Sequelize.STRING
      },
      user_mobile: {
        type: Sequelize.STRING
      },
      user_address: {
        type: Sequelize.STRING
      },
      plus_check: {
        type: Sequelize.STRING
      },
      delivery_detail: {
        type: Sequelize.STRING
      },
      totalprice: {
        type: Sequelize.INTEGER
      },
      state: {
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
    await queryInterface.dropTable('orders');
  }
};