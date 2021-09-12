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
      // define association here
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