'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('trago_ingredientes',[
      {
        //PISCO SOUR
       //3 medidas de pisco
       cantidadIngrediente: '150',
       ingredienteId: '20',
       tragoId: '1',
       createdAt: new Date(),
       updatedAt: new Date()
       },{
       
       cantidadIngrediente: '50',
       ingredienteId: '39',
       tragoId: '1',
       createdAt: new Date(),
       updatedAt: new Date()
       },{
         
         cantidadIngrediente: '15',
         ingredienteId: '22',
         tragoId: '1',
         createdAt: new Date(),
         updatedAt: new Date()
       },{
         
         cantidadIngrediente: '1',
         ingredienteId: '7',
         tragoId: '1',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       //OLD FASHIONED
       {
         
         cantidadIngrediente: '1',
         ingredienteId: '23',
         tragoId: '2',
         createdAt: new Date(),
         updatedAt: new Date()
       },{
         
         cantidadIngrediente: '1',
         ingredienteId: '26',
         tragoId: '2',
         createdAt: new Date(),
         updatedAt: new Date()
       },{
         
         
         cantidadIngrediente: '50',
         ingredienteId: '27',
         tragoId: '2',
         createdAt: new Date(),
         updatedAt: new Date()
         },{
         
         cantidadIngrediente: '50',
         ingredienteId: '29',
         tragoId: '2',
         createdAt: new Date(),
         updatedAt: new Date()
         },{
           
           cantidadIngrediente: '50',
           ingredienteId: '28',
           tragoId: '2',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           //GOTAS AMARGO DE ANGOSTURA
          cantidadIngrediente: '1',
          ingredienteId: '31',
          tragoId: '2',
          createdAt: new Date(),
          updatedAt: new Date()
        },
         //martini SECO
         {
           
           cantidadIngrediente: '50',
           ingredienteId: '34',
           tragoId: '3',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           
           cantidadIngrediente: '1',
           ingredienteId: '35',
           tragoId: '3',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           
           cantidadIngrediente: '1',
           ingredienteId: '36',
           tragoId: '3',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         //DAIKIRI
         {
           
           cantidadIngrediente: '50',
           ingredienteId: '37',
           tragoId: '4',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           
           cantidadIngrediente: '12',
           ingredienteId: '38',
           tragoId: '4',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           
           cantidadIngrediente: '6',
           ingredienteId: '39',
           tragoId: '4',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           
           cantidadIngrediente: '40',
           ingredienteId: '33',
           tragoId: '4',
           createdAt: new Date(),
           updatedAt: new Date()
           
         },
         //PICHUNCHO
         {
           
           
           cantidadIngrediente: '50',
           ingredienteId: '20',
           tragoId: '5',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           //2 cebollas
           
           cantidadIngrediente: '50',
           ingredienteId: '40',
           tragoId: '5',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           //4 zanahorias
           
           cantidadIngrediente: '1',
           ingredienteId: '26',
           tragoId: '5',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           //1 kilo de papas
           
           cantidadIngrediente: '1',
           ingredienteId: '41',
           tragoId: '5',
           createdAt: new Date(),
           updatedAt: new Date()
         },
         //Bloody mary
         {
           //1 huevo
           
           cantidadIngrediente: '1',
           ingredienteId: '42',
           tragoId: '6',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           //sal, 3 gr
           
           cantidadIngrediente: '50',
           ingredienteId: '43',
           tragoId: '6',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           //pimienta 1 gr
           
           cantidadIngrediente: '1',
           ingredienteId: '21',
           tragoId: '6',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           //oregano 30 gr
           
           cantidadIngrediente: '20',
           ingredienteId: '17',
           tragoId: '6',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           //perejil 1 unidad
           
           cantidadIngrediente: '5',
           ingredienteId: '13',
           tragoId: '6',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           //aceite 30 cc
           
           cantidadIngrediente: '2',
           ingredienteId: '44',
           tragoId: '6',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
           //carne caldos 2
           
           cantidadIngrediente: '1',
           ingredienteId: '45',
           tragoId: '6',
           createdAt: new Date(),
           updatedAt: new Date()
         },{
          //carne caldos 2
          
          cantidadIngrediente: '10',
          ingredienteId: '46',
          tragoId: '6',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //1 cubo de hielo
          
          cantidadIngrediente: '1',
          ingredienteId: '32',
          tragoId: '6',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //PETITE FLEUR
        {
          //
          
          cantidadIngrediente: '25',
          ingredienteId: '47',
          tragoId: '7',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //
          
          cantidadIngrediente: '25',
          ingredienteId: '48',
          tragoId: '7',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //FRIVOLA MENTITA
        {
          //
          
          cantidadIngrediente: '50',
          ingredienteId: '49',
          tragoId: '8',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '50',
          ingredienteId: '38',
          tragoId: '8',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '25',
          ingredienteId: '34',
          tragoId: '8',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '1',
          ingredienteId: '50',
          tragoId: '8',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //TOM COLLINS
        {
          //carne caldos 2
          
          cantidadIngrediente: '50',
          ingredienteId: '34',
          tragoId: '9',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '1',
          ingredienteId: '21',
          tragoId: '9',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '20',
          ingredienteId: '33',
          tragoId: '9',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '200',
          ingredienteId: '51',
          tragoId: '9',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //CLAVO OXIDADO
        {
          //carne caldos 2
          
          cantidadIngrediente: '25',
          ingredienteId: '52',
          tragoId: '10',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '50',
          ingredienteId: '27',
          tragoId: '10',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '1',
          ingredienteId: '31',
          tragoId: '10',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //PIÑA COLADA
        {
          //carne caldos 2
          
          cantidadIngrediente: '100',
          ingredienteId: '53',
          tragoId: '11',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '100',
          ingredienteId: '54',
          tragoId: '11',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '100',
          ingredienteId: '28',
          tragoId: '11',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '50',
          ingredienteId: '37',
          tragoId: '11',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        //TROPICALISSIMO
        {
          //carne caldos 2
          
          cantidadIngrediente: '3',
          ingredienteId: '32',
          tragoId: '12',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '20',
          ingredienteId: '55',
          tragoId: '12',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '1',
          ingredienteId: '23',
          tragoId: '12',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '50',
          ingredienteId: '56',
          tragoId: '12',
          createdAt: new Date(),
          updatedAt: new Date()
        },{
          //carne caldos 2
          
          cantidadIngrediente: '300',
          ingredienteId: '57',
          tragoId: '12',
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
