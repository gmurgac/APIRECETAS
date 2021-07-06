'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class plato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      plato.belongsToMany(models.ingrediente, {
        as: 'ingredientes',
        foreignKey: 'platoId',
        through: models.plato_ingredientes
      });
    }
  };
  plato.init({
    platoId:{
      allowNull:false,
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER
    },
    nombre: {
      unique: true,
      type: DataTypes.STRING,
    },
    descripcion: DataTypes.STRING,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'plato',
  });
  return plato;
};