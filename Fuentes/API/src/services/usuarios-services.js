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

exports.login = async (usuario)=>{
    let validador = null;
    validador = await Usuario.findOne({
        where: {
            
            nombreUsuario: Sequelize.where(Sequelize.fn('BINARY',Sequelize.col('nombreUsuario')),'=',`${usuario.nombreUsuario}`),
            passwordUsuario: usuario.passwordUsuario
        },
        
    });
    if(validador!=null){
        return true;
    }else{
        return false;
    }
}