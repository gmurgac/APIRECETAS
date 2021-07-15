const Sequelize = require('sequelize');
const Plato = require('../models').plato;
const {Op} = require('sequelize');

exports.getAll = async (filtro = null)=>{
let platos = null;
if(filtro == null){
        platos = await Plato.findAll({
        include: {
            association: 'ingredientes',
            
        }
     });
 
     
}else{
    platos = await Plato.findAll({
        attribute: 'nombre',
        include:{
            association: 'ingredientes'
        },
        where:{
            [Op.or]:[
                {nombre:{[Op.like]: `%${filtro}%`}},
                
                
            ]
        }
    });
}
return platos;

    
};

exports.save = async(plato)=>{
    return await Plato.create(plato);
};