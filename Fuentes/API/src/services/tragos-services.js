const Sequelize = require('sequelize');
const Trago = require('../models').tragos;
const {Op} = require('sequelize');

exports.getAll = async (filtro = null)=>{
let tragos = null;
if(filtro == null){
            tragos = await Trago.findAll({
         include: {
            association: 'ingredientes',
            

         },
        order: [
        
            ['nombre', 'ASC'],
        ],
     });
 
     
}else{
    tragos = await Trago.findAll({
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
    return await Trago.create(trago);
};


exports.update = async(trago)=>{
    return await Trago.update({
        
        descripcion : trago.descripcion
    },{
        where: {
            tragoId: trago.tragoId
        }
    }
    );
}

exports.getOne = async (filtro)=>{
    let trago = null;
    trago = await Trago.findOne({
        where: {
            nombre: filtro
        },
        include: {
            association: 'ingredientes',
            
        }
    });
    return trago;
};