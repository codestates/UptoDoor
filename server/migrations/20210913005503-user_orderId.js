'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    await queryInterface.addColumn('users', 'order_id', Sequelize.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('users', {
      fields: ['order_id'],
      type: 'foreign key',
      name: 'FK_user_order_id',
      references: {
        table: 'orders',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
     })
 },

 down: async (queryInterface, Sequelize) => {
   await queryInterface.removeConstraint('users', 'FK_user_order_id');
   await queryInterface.removeColumn('users', 'order_id');
 }
};
