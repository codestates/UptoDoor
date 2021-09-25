'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // field 추가
    await queryInterface.addColumn('order_menus', 'menu_id', Sequelize.INTEGER);

    // foreign key 연결
    await queryInterface.addConstraint('order_menus', {
      fields: ['menu_id'],
      type: 'foreign key',
      name: 'FK_ordermenu_menu_id',
      references: {
        table: 'menus',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
     })
 },

 down: async (queryInterface, Sequelize) => {
   await queryInterface.removeConstraint('order_menus', 'FK_ordermenu_menu_id');
   await queryInterface.removeColumn('order_menus', 'menu_id');
 }
};
