'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tragos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      tragos.belongsToMany(models.ingrediente, {
        as: 'ingredientes',
        foreignKey: 'tragoId',
        through: models.trago_ingredientes
      });
    }
  };
  tragos.init({
    tragoId:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
    },
    nombre: 
    {
      type: DataTypes.STRING,
      unique: true},
    descripcion: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tragos',
  });
  return tragos;
};