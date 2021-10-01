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
      models.user.hasMany(models.user_order,{foreignKey: "user_id", sourceKey: 'id'})
      models.user.belongsTo(models.store,{foreignKey: "store_id", sourceKey: 'id'})
    }
  };
  user.init({
    email: DataTypes.STRING,
    nickname: DataTypes.STRING,
    password: DataTypes.STRING,
    mainAddress: DataTypes.STRING,
    mainAddressDetail: DataTypes.STRING,
    main_Xvalue: DataTypes.FLOAT,
    main_Yvalue: DataTypes.FLOAT,
    subAddress: DataTypes.STRING,
    subAddressDetail: DataTypes.STRING,
    sub_Xvalue: DataTypes.FLOAT,
    sub_Yvalue: DataTypes.FLOAT,
    mobile: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.STRING,
    emailcheck: DataTypes.STRING,
    position: DataTypes.STRING,
    billingkey: DataTypes.STRING,
    receipt: DataTypes.STRING,
    login_type: DataTypes.STRING,
    oauth_token: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};