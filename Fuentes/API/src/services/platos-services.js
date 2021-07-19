const Sequelize = require('sequelize');
const Plato = require('../models').plato;
const {Op} = require('sequelize');

exports.getOne = async (filtro)=>{
    let plato = null;
    plato = await Plato.findOne({
        where: {
            nombre: filtro
        },
        include: {
            association: 'ingredientes',
            
        }
    });
    return plato;
};

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
        }/*  */
    });
}
return platos;

    
};

exports.save = async(plato)=>{
   
        return await Plato.create(plato);
    };
    


exports.update = async(plato)=>{
    return await Plato.update({
        
        descripcion : plato.descripcion
    },{
        where: {
            platoId: plato.platoId
        }
    }
    );
}