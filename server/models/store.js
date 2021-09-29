'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.store.hasMany(models.user,{foreignKey: "store_id", sourceKey: 'id'})
      models.store.hasMany(models.order,{foreignKey: "store_id", sourceKey: 'id'})
      models.store.hasMany(models.store_menu,{foreignKey: "store_id", sourceKey: 'id'})
    }
  };
  store.init({
    name: DataTypes.STRING,
    image: DataTypes.TEXT,
    number: DataTypes.STRING,
    address: DataTypes.STRING,
    address_detail: DataTypes.STRING,
    xvalue: DataTypes.FLOAT,
    yvalue: DataTypes.FLOAT,
    category: DataTypes.STRING,
    introduce: DataTypes.STRING,
    delivery_time: DataTypes.STRING,
    Business_paper: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'store',
  });
  return store;
};