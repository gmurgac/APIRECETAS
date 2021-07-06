const Sequelize = require('sequelize');
const trago = require('../models').tragos;
const {Op} = require('sequelize');

exports.getAll = async (filtro = null)=>{
let tragos = null;
if(filtro == null){
            tragos = await trago.findAll({
         include: {
            association: 'ingredientes',
            

         },
        order: [
        
            ['nombre', 'ASC'],
        ],
     });
 
     
}else{
    tragos = await trago.findAll({
        include: {
            association: 'ingredientes',
            

         },
        attribute: 'nombre',
        order: [
        
            ['nombre', 'ASC'],
        ],
        
        where:{
            [Op.or]:[
                {nombre:{[Op.like]: `%${filtro}%`}},
                
                
            ]
        }
    });
}
return tragos;

    
};

exports.save = async(trago)=>{
    return await Tragos.create(trago);
};