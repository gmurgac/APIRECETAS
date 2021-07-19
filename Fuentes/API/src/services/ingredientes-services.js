const Sequelize = require('sequelize');
const Ingrediente = require('../models').ingrediente;
const {Op} = require('sequelize');

exports.getAll = async (filtro = null)=>{
    let ingredientes = null;
    if(filtro == null){
       ingredientes = await Ingrediente.findAll({
            order: [
            
                ['nombre', 'ASC'],
            ],
        
        });
    
    }else{
        ingredientes = await Ingrediente.findAll({
            attribute: 'nombre',
            where:{
                [Op.or]:[
                    {nombre:{[Op.like]:`%${filtro}%`}},
                ]
            }
        });
    }
    
    return ingredientes;
};

exports.save = async(ingrediente)=>{
    return await Ingrediente.create(ingrediente);
};