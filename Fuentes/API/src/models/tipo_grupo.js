'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_grupo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  tipo_grupo.init({
    nombre: DataTypes.STRING,
    predominante: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo_grupo',
  });
  return tipo_grupo;
};