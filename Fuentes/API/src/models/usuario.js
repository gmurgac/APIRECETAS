'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      usuario.hasMany(models.tragos,{
        as:'tragos usuario',
        foreignKey: 'tragoId'
      });
      usuario.hasMany(models.plato,{
        as:'platos usuario',
        foreignKey: 'platoId'
      });
    }
  };
  usuario.init({
    usuarioId: {
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER},
    nombreUsuario: DataTypes.STRING,
    correoUsuario: DataTypes.STRING,
    passwordUsuario: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuario',
  });
  return usuario;
};