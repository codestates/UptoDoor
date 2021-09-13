'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    await queryInterface.addColumn('users', 'store_id', Sequelize.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('users', {
      fields: ['store_id'],
      type: 'foreign key',
      name: 'FK_user_store_id',
      references: {
        table: 'stores',
        field: 'id',
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('users', 'FK_user_store_id');
    await queryInterface.removeColumn('users', 'store_id');
  },
};
