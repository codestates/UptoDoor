'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("order_deliveries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      delivery_time: {
        type: Sequelize.STRING,
      },
      delivery_day: {
        type: Sequelize.STRING,
      },
      delivery_term: {
        type: Sequelize.STRING,
      },
      paycount: {
<<<<<<< HEAD
        type: Sequelize.INTEGER
      },
      payday: {
        type: Sequelize.STRING
=======
        type: Sequelize.INTEGER,
      },
      payday: {
        type: Sequelize.STRING,
>>>>>>> 7aa89294683145cec8f5ab5eca889c758cb2805d
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('order_deliveries');
  }
};