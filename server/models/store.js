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
      // define association here
    }
  };
  store.init({
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    number: DataTypes.STRING,
    address: DataTypes.STRING,
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