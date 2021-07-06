const Sequelize = require('sequelize');
const platoIngredientes = require('../models').plato_ingredientes;


exports.getAll = async ()=>{
    let platosIngredientes = await platoIngredientes.findAll({
        
    
    });

    return platosIngredientes;
};

exports.save = async(plato)=>{
    return await Plato.create(plato);
};