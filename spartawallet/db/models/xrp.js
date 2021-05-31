'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class xrp extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  xrp.init({
    userID: DataTypes.NUMBER,
    quantity: DataTypes.NUMBER,
    price: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'xrp',
  });
  return xrp;
};