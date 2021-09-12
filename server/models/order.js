'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  order.init({
    order_time: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_mobile: DataTypes.STRING,
    user_address: DataTypes.STRING,
    plus_check: DataTypes.STRING,
    plus_detail: DataTypes.STRING,
    totalprice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};