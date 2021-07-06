'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plato_ingredientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      plato_ingredientes.belongsTo(models.ingrediente, {
        as: 'idIngrediente',
        foreignKey: 'ingredienteId'
      })
      plato_ingredientes.belongsTo(models.plato, {
        as: 'idPlato',
        foreignKey: 'platoId'
      })
    }
  };
  plato_ingredientes.init({
    cantidadComensales: DataTypes.INTEGER,
    cantidadIngrediente: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'plato_ingredientes',
  });
  return plato_ingredientes;
};