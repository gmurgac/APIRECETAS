'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class comunas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      comunas.hasMany(models.usuario,{
        as:'usuario',
        foreignKey:'usuarioId'
      });
      comunas.belongsTo(models.regiones);
    }
  };
  comunas.init({
    comunaId: DataTypes.INTEGER,
    nombreComuna: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'comunas',
  });
  return comunas;
};