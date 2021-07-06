'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     return queryInterface.bulkInsert('plato_ingredientes',[
       {
         //sopa de cebolla
        cantidadComensales: '2',
        cantidadIngrediente: '4',
        ingredienteId: '1',
        platoId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
        cantidadComensales: '2',
        cantidadIngrediente: '30',
        ingredienteId: '2',
        platoId: '1',
        createdAt: new Date(),
        updatedAt: new Date()
        },{
          cantidadComensales: '2',
          cantidadIngrediente: '160',
          ingredienteId: '4',
          platoId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          cantidadComensales: '2',
          cantidadIngrediente: '2',
          ingredienteId: '5',
          platoId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          cantidadComensales: '2',
          cantidadIngrediente: '2',
          ingredienteId: '7',
          platoId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          cantidadComensales: '2',
          cantidadIngrediente: '1',
          ingredienteId: '13',
          platoId: '1',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //REPOLLO
          cantidadComensales: '2',
          cantidadIngrediente: '1',
          ingredienteId: '8',
          platoId: '2',
          createdAt: new Date(),
          updatedAt: new Date()
          },{
          cantidadComensales: '2',
          cantidadIngrediente: '500',
          ingredienteId: '9',
          platoId: '2',
          createdAt: new Date(),
          updatedAt: new Date()
          },{
            cantidadComensales: '2',
            cantidadIngrediente: '2',
            ingredienteId: '10',
            platoId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            cantidadComensales: '2',
            cantidadIngrediente: '1',
            ingredienteId: '1',
            platoId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            cantidadComensales: '2',
            cantidadIngrediente: '1',
            ingredienteId: '3',
            platoId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            cantidadComensales: '2',
            cantidadIngrediente: '30',
            ingredienteId: '2',
            platoId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            cantidadComensales: '2',
            cantidadIngrediente: '1',
            ingredienteId: '14',
            platoId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            cantidadComensales: '2',
            cantidadIngrediente: '1',
            ingredienteId: '5',
            platoId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            cantidadComensales: '2',
            cantidadIngrediente: '80',
            ingredienteId: '4',
            platoId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            cantidadComensales: '2',
            cantidadIngrediente: '2',
            ingredienteId: '12',
            platoId: '2',
            createdAt: new Date(),
            updatedAt: new Date()
            //Ajiaco
          },{
            //posta 1/4
            cantidadComensales: '5',
            cantidadIngrediente: '0.25',
            ingredienteId: '15',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //2 cebollas
            cantidadComensales: '5',
            cantidadIngrediente: '2',
            ingredienteId: '1',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //4 zanahorias
            cantidadComensales: '5',
            cantidadIngrediente: '4',
            ingredienteId: '16',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //1 kilo de papas
            cantidadComensales: '5',
            cantidadIngrediente: '4',
            ingredienteId: '12',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //1 huevo
            cantidadComensales: '5',
            cantidadIngrediente: '1',
            ingredienteId: '7',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //sal, 3 gr
            cantidadComensales: '5',
            cantidadIngrediente: '3',
            ingredienteId: '17',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //pimienta 1 gr
            cantidadComensales: '5',
            cantidadIngrediente: '1',
            ingredienteId: '13',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //oregano 30 gr
            cantidadComensales: '5',
            cantidadIngrediente: '30',
            ingredienteId: '18',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //perejil 1 unidad
            cantidadComensales: '5',
            cantidadIngrediente: '1',
            ingredienteId: '19',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //aceite 30 cc
            cantidadComensales: '5',
            cantidadIngrediente: '30',
            ingredienteId: '2',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //carne caldos 2
            cantidadComensales: '5',
            cantidadIngrediente: '2',
            ingredienteId: '5',
            platoId: '3',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Colifro con salsa blanca
            cantidadComensales: '5',
            cantidadIngrediente: '1',
            ingredienteId: '58',
            platoId: '4',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Colifro con salsa blanca
            cantidadComensales: '5',
            cantidadIngrediente: '6',
            ingredienteId: '7',
            platoId: '4',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Colifro con salsa blanca
            cantidadComensales: '5',
            cantidadIngrediente: '1000',
            ingredienteId: '54',
            platoId: '4',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Colifro con salsa blanca
            cantidadComensales: '5',
            cantidadIngrediente: '45',
            ingredienteId: '4',
            platoId: '4',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Colifro con salsa blanca
            cantidadComensales: '5',
            cantidadIngrediente: '30',
            ingredienteId: '2',
            platoId: '4',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Colifro con salsa blanca
            cantidadComensales: '5',
            cantidadIngrediente: '0.2',
            ingredienteId: '3',
            platoId: '4',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Colifro con salsa blanca
            cantidadComensales: '5',
            cantidadIngrediente: '5',
            ingredienteId: '12',
            platoId: '4',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Porotos con tallarines
            cantidadComensales: '6',
            cantidadIngrediente: '0.75',
            ingredienteId: '59',
            platoId: '5',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Porotos con tallarines
            cantidadComensales: '6',
            cantidadIngrediente: '1',
            ingredienteId: '60',
            platoId: '5',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Porotos con tallarines
            cantidadComensales: '6',
            cantidadIngrediente: '50',
            ingredienteId: '61',
            platoId: '5',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Porotos con tallarines
            cantidadComensales: '6',
            cantidadIngrediente: '6',
            ingredienteId: '62',
            platoId: '5',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Porotos con tallarines
            cantidadComensales: '6',
            cantidadIngrediente: '2',
            ingredienteId: '1',
            platoId: '5',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Porotos con tallarines
            cantidadComensales: '6',
            cantidadIngrediente: '1',
            ingredienteId: '5',
            platoId: '5',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Porotos con tallarines
            cantidadComensales: '6',
            cantidadIngrediente: '0.5',
            ingredienteId: '63',
            platoId: '5',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Porotos con tallarines
            cantidadComensales: '6',
            cantidadIngrediente: '0.5',
            ingredienteId: '3',
            platoId: '5',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Porotos con tallarines
            cantidadComensales: '6',
            cantidadIngrediente: '5',
            ingredienteId: '13',
            platoId: '5',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Porotos con tallarines
            cantidadComensales: '6',
            cantidadIngrediente: '20',
            ingredienteId: '18',
            platoId: '5',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '2',
            ingredienteId: '60',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '1',
            ingredienteId: '14',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '4',
            ingredienteId: '16',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '250',
            ingredienteId: '9',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '3',
            ingredienteId: '1',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '0.4',
            ingredienteId: '3',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '1',
            ingredienteId: '64',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '10',
            ingredienteId: '18',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '1',
            ingredienteId: '13',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '15',
            ingredienteId: '17',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '45',
            ingredienteId: '2',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la italiana
            cantidadComensales: '8',
            cantidadIngrediente: '4',
            ingredienteId: '33',
            platoId: '6',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Hamburgesas con arroz
            cantidadComensales: '6',
            cantidadIngrediente: '500',
            ingredienteId: '9',
            platoId: '7',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Hamburgesas con arroz
            cantidadComensales: '6',
            cantidadIngrediente: '3',
            ingredienteId: '7',
            platoId: '7',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Hamburgesas con arroz
            cantidadComensales: '6',
            cantidadIngrediente: '1.5',
            ingredienteId: '6',
            platoId: '7',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Hamburgesas con arroz
            cantidadComensales: '6',
            cantidadIngrediente: '2',
            ingredienteId: '1',
            platoId: '7',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Hamburgesas con arroz
            cantidadComensales: '6',
            cantidadIngrediente: '1',
            ingredienteId: '13',
            platoId: '7',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Hamburgesas con arroz
            cantidadComensales: '6',
            cantidadIngrediente: '15',
            ingredienteId: '18',
            platoId: '7',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Hamburgesas con arroz
            cantidadComensales: '6',
            cantidadIngrediente: '0.25',
            ingredienteId: '3',
            platoId: '7',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Hamburgesas con arroz
            cantidadComensales: '6',
            cantidadIngrediente: '6',
            ingredienteId: '65',
            platoId: '7',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Hamburgesas con arroz
            cantidadComensales: '6',
            cantidadIngrediente: '60',
            ingredienteId: '2',
            platoId: '7',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Hamburgesas con arroz
            cantidadComensales: '6',
            cantidadIngrediente: '1000',
            ingredienteId: '69',
            platoId: '7',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la Bontou
            cantidadComensales: '8',
            cantidadIngrediente: '2',
            ingredienteId: '60',
            platoId: '8',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la Bontou
            cantidadComensales: '8',
            cantidadIngrediente: '1000',
            ingredienteId: '54',
            platoId: '8',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la Bontou
            cantidadComensales: '8',
            cantidadIngrediente: '30',
            ingredienteId: '4',
            platoId: '8',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la Bontou
            cantidadComensales: '8',
            cantidadIngrediente: '1',
            ingredienteId: '70',
            platoId: '8',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la Bontou
            cantidadComensales: '8',
            cantidadIngrediente: '30',
            ingredienteId: '2',
            platoId: '8',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la Bontou
            cantidadComensales: '8',
            cantidadIngrediente: '0.25',
            ingredienteId: '3',
            platoId: '8',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la Bontou
            cantidadComensales: '8',
            cantidadIngrediente: '8',
            ingredienteId: '17',
            platoId: '8',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la Bontou
            cantidadComensales: '8',
            cantidadIngrediente: '1',
            ingredienteId: '71',
            platoId: '8',
            createdAt: new Date(),
            updatedAt: new Date()
          },{
            //Tallarines a la Bontou
            cantidadComensales: '8',
            cantidadIngrediente: '1',
            ingredienteId: '13',
            platoId: '8',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        
        ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
