'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_order extends Model {
      /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user_order.belongsTo(models.order,{foreignKey: "order_id", sourceKey: 'id'})
      models.user_order.belongsTo(models.user,{foreignKey: "user_id", sourceKey: 'id'})
    }
  };
  user_order.init({
  }, {
    sequelize,
    modelName: 'user_order',
  });
  return user_order;
};