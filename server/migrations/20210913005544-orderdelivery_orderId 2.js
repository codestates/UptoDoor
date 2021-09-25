'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    await queryInterface.addColumn('order_deliveries', 'order_id', Sequelize.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('order_deliveries', {
      fields: ['order_id'],
      type: 'foreign key',
      name: 'FK_order_deliveries_order_id',
      references: {
        table: 'orders',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
     })
 },

 down: async (queryInterface, Sequelize) => {
   await queryInterface.removeConstraint('order_deliveries', 'FK_order_deliveries_order_id');
   await queryInterface.removeColumn('order_deliveries', 'order_id');
 }
};
