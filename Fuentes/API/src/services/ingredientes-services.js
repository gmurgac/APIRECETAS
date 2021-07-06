const Sequelize = require('sequelize');
const Ingrediente = require('../models').ingrediente;


exports.getAll = async ()=>{
    let ingredientes = await Ingrediente.findAll({
        order: [
        
            ['nombre', 'ASC'],
        ],
    
    });

    return ingredientes;
};

exports.save = async(plato)=>{
    return await Plato.create(plato);
};