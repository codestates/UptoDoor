'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    await queryInterface.addColumn('store_menus', 'menu_id', Sequelize.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('store_menus', {
      fields: ['menu_id'],
      type: 'foreign key',
      name: 'FK_store_menu_menu_id',
      references: {
        table: 'menus',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
     })
 },

 down: async (queryInterface, Sequelize) => {
   await queryInterface.removeConstraint('store_menus', 'FK_store_menu_menu_id');
   await queryInterface.removeColumn('store_menus', 'menu_id');
 }
};
