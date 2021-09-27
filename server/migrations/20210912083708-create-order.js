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
      user_name: {
        type: Sequelize.STRING
      },
      selected_mobile: {
        type: Sequelize.STRING
      },
      selected_address: {
        type: Sequelize.STRING
      },
      selected_address_detail: {
        type: Sequelize.STRING
      },
      plus_check: {
        type: Sequelize.STRING
      },
      delivery_detail: {
        type: Sequelize.STRING
      },
      plus_money: {
        type: Sequelize.INTEGER
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