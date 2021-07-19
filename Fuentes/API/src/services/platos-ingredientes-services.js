const Sequelize = require('sequelize');
const PlatoIngredientes = require('../models').plato_ingredientes;


exports.getAll = async ()=>{
    let platosIngredientes = await PlatoIngredientes.findAll({
        
    
    });

    return platosIngredientes;
};

exports.save = async(platoIngrediente)=>{
    return await PlatoIngredientes.create(platoIngrediente);
};

exports.delete = async(platoIngrediente)=>{
   
         await PlatoIngredientes.destroy({
            where: {
                platoId: platoIngrediente.platoId,
                ingredienteId: platoIngrediente.ingredienteId
            }
        });
    };
    exports.update = async(platoIngrediente)=>{
        return await PlatoIngredientes.update({
            cantidadIngrediente: platoIngrediente.cantidadIngrediente
        },{
            where: {
                platoId: platoIngrediente.platoId,
                ingredienteId: platoIngrediente.ingredienteId
            }
        }
        );
    }