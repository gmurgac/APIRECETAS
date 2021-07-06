'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class trago_ingredientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      trago_ingredientes.belongsTo(models.ingrediente, {
        as: 'idIngrediente',
        foreignKey: 'ingredienteId'
      })
      trago_ingredientes.belongsTo(models.tragos, {
        as: 'idTrago',
        foreignKey: 'tragoId'
      })
    }
  };
  trago_ingredientes.init({
    cantidadIngrediente: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'trago_ingredientes',
  });
  return trago_ingredientes;
};