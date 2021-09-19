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
      models.user.belongsTo(models.store,{foreignKey: "store_id", sourceKey: 'id'})
      models.user.belongsTo(models.order,{foreignKey: "order_id", sourceKey: 'id'})
    }
  };
  user.init({
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    mainaddress: DataTypes.STRING,
    mainaddressDetail: DataTypes.STRING,
    main_xvalue: DataTypes.FLOAT,
    main_yvalue: DataTypes.FLOAT,
    subaddress: DataTypes.STRING,
    subaddressDetail: DataTypes.STRING,
    sub_xvalue: DataTypes.FLOAT,
    sub_yvalue: DataTypes.FLOAT,
    mobile: DataTypes.STRING,
    age: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    emailcheck: DataTypes.STRING,
    position: DataTypes.STRING,
    billingkey: DataTypes.STRING,
    signup_type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};