'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ingrediente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ingrediente.belongsToMany(models.plato, {
        as: 'Plato',
        foreignKey: 'ingredienteId',
        through: models.plato_ingredientes
      });
      ingrediente.belongsToMany(models.tragos,{
        as: 'Trago',
        foreignKey: 'ingredienteId',
        through: models.trago_ingredientes
      });
    }
  };
  ingrediente.init({
    ingredienteId:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
    },
    nombre: {
      unique: true,
      type:DataTypes.STRING
    },
    unidadMedida: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ingrediente',
  });
  return ingrediente;
};