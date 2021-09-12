'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order_delivery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  order_delivery.init({
    delivery_time: DataTypes.STRING,
    delivery_day: DataTypes.STRING,
    delivery_term: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'order_delivery',
  });
  return order_delivery;
};