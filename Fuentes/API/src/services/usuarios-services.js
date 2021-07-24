const Sequelize = require('sequelize');
const Usuario = require('../models').usuario;
const {Op} = require('sequelize');
//Guardar usuario
exports.save = async(usuario)=>{
    return await Usuario.create(usuario);
};

exports.getAll = async (filtro = null)=>{
    let usuarios = null;
    if(filtro == null){
       usuarios = await Usuario.findAll({
            order: [
            
                ['nombreUsuario', 'ASC'],
            ],
        
        });
    
    }
    return usuarios;
}