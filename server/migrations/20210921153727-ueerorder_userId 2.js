'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    await queryInterface.addColumn('user_orders', 'user_id', Sequelize.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('user_orders', {
      fields: ['user_id'],
      type: 'foreign key',
      name: 'FK_userorder_user_id',
      references: {
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
     })
 },

 down: async (queryInterface, Sequelize) => {
   await queryInterface.removeConstraint('user_orders', 'FK_userorder_user_id');
   await queryInterface.removeColumn('user_orders', 'user_id');
 }
};
