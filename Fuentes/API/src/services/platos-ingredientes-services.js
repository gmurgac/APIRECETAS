const Sequelize = require('sequelize');
const PlatoIngredientes = require('../models').plato_ingredientes;


exports.buscarConIngrediente = async (filtro)=>{
    let platosIngredientes = await PlatoIngredientes.findAll({
        include: [{association:'idIngrediente',where:{'$idIngrediente.nombre$':filtro}},{association:'idPlato',include:{association:'ingredientes'}}]
        
       

    });
    return platosIngredientes;
}

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