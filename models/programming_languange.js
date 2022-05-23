'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Programming_Languange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Programming_Languange.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Programming_Languange',
  });
  return Programming_Languange;
};