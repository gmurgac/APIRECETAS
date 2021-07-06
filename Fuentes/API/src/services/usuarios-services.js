const Sequelize = require('sequelize');
const Usuario = require('../models').usuario;
const {Op} = require('sequelize');
//Guardar usuario
exports.save = async(usuario)=>{
    return await Usuario.create(usuario);
};