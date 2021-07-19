const Sequelize = require('sequelize');
const TragoIngredientes = require('../models').trago_ingredientes;


exports.getAll = async ()=>{
    let tragosIngredientes = await TragoIngredientes.findAll({
        
    
    });

    return tragosIngredientes;
};

exports.save = async(tragoIngrediente)=>{
    return await TragoIngredientes.create(tragoIngrediente);
};

exports.delete = async(tragoIngrediente)=>{
   
    await TragoIngredientes.destroy({
       where: {
           tragoId: tragoIngrediente.tragoId,
           ingredienteId: tragoIngrediente.ingredienteId
       }
   });
};

exports.update = async(tragoIngrediente)=>{
    return await TragoIngredientes.update({
        cantidadIngrediente: tragoIngrediente.cantidadIngrediente
    },{
        where: {
            tragoId: tragoIngrediente.tragoId,
            ingredienteId: tragoIngrediente.ingredienteId
        }
    }
    );
}