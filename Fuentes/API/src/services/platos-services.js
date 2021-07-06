const Sequelize = require('sequelize');
const plato = require('../models').plato;
const {Op} = require('sequelize');

exports.getAll = async (filtro = null)=>{
let platos = null;
if(filtro == null){
        platos = await plato.findAll({
        include: {
            association: 'ingredientes',
            
        }
     });
 
     
}else{
    platos = await plato.findAll({
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