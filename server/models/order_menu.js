'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.order_menu.belongsTo(models.order,{foreignKey: "order_id", sourceKey: 'id'})
      models.order_menu.belongsTo(models.menu,{foreignKey: "menu_id", sourceKey: 'id'})
    }
  };
  order_menu.init({
    quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order_menu',
  });
  return order_menu;
};