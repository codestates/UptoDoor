'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    mainaddress: DataTypes.STRING,
    main_xvalue: DataTypes.FLOAT,
    main_yvalue: DataTypes.FLOAT,
    subaddres: DataTypes.STRING,
    sub_xvalue: DataTypes.FLOAT,
    sub_yvalue: DataTypes.FLOAT,
    mobile: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    emailcheck: DataTypes.STRING,
    position: DataTypes.STRING,
    billingkey: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};