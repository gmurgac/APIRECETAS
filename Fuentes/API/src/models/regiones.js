'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class regiones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      regiones.hasMany(models.comunas,{
        as:'comuna',
        foreignKey:'comunaId'
      });
      regiones.belongsTo(models.paises);
    }
  };
  regiones.init({
    regionId: DataTypes.INTEGER,
    nombreRegion: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'regiones',
  });
  return regiones;
};