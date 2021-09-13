'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    await queryInterface.addColumn('orders', 'store_id', Sequelize.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('orders', {
      fields: ['store_id'],
      type: 'foreign key',
      name: 'FK_order_store_id',
      references: {
        table: 'stores',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
     })
 },

 down: async (queryInterface, Sequelize) => {
   await queryInterface.removeConstraint('orders', 'FK_order_store_id');
   await queryInterface.removeColumn('orders', 'store_id');
 }
};
