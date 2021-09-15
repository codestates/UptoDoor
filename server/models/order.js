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
      models.order.hasMany(models.user,{foreignKey: "order_id", sourceKey: 'id'})
      models.order.hasMany(models.order_menu,{foreignKey: "order_id", sourceKey: 'id'})
      models.order.hasMany(models.order_delivery,{foreignKey: "order_id", sourceKey: 'id'})
      models.order.belongsTo(models.store,{foreignKey: "store_id", sourceKey: 'id'})
    }
  };
  order.init({
    order_time: DataTypes.STRING,
    user_email: DataTypes.STRING,
    user_mobile: DataTypes.STRING,
    user_address: DataTypes.STRING,
    plus_check: DataTypes.STRING,
    delivery_detail: DataTypes.STRING,
    totalprice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'order',
  });
  return order;
};