'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class store_menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.store_menu.belongsTo(models.store,{foreignKey: "store_id", sourceKey: 'id'})
      models.store_menu.belongsTo(models.menu,{foreignKey: "menu_id", sourceKey: 'id'})
    }
  };
  store_menu.init({
  }, {
    sequelize,
    modelName: 'store_menu',
  });
  return store_menu;
};