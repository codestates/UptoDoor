'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.menu.hasMany(models.store_menu,{foreignKey: "menu_id", sourceKey: 'id'})
      models.menu.hasMany(models.order_menu,{foreignKey: "menu_id", sourceKey: 'id'})
    }
  };
  menu.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.INTEGER,
    detail: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'menu',
  });
  return menu;
};