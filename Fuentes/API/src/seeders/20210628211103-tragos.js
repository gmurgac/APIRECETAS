'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {


    return queryInterface.bulkInsert('tragos',[{
      nombre: 'Pisco Sour',
      descripcion: 'Se colocan los ingredientes en una coctelera con hielo. Se bate y sirve colado. El borde de la copa se humedece en granadina y luego se pasa por azucar. Clara de huevo optativo.',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Old Fashioned',
      descripcion: 'En un vaso de whisky corto se coloca la piña, la naranja y el marrasquino. Se agrega hielo, la medida de whisky, juego de piña, jugo de naranja, terron de azúcar quemado, hojas de menta y gotas de amargo. Se prepara en el vaso',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Martini Seco',
      descripcion: 'En un vaso mezclador se coloca el gin, el vermouth seco y el hielo. Se revuelve rápidamente, se cuela y se sirve. A la copa se le agrega la aceituna verde.',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Daikiri',
      descripcion: 'Mezcle todo en una coctelera, sirva en copa de coñac, agregándole un marrasquino',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Pichuncho',
      descripcion: 'Se une todo en un vaso mezclador con cubos de hielo. Se cuela y sirve con un marrasquino ensartado en un pincho.',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Bloody Mary',
      descripcion: 'En un vaso mezclador se coloca un cubo de hielo,  el jugo de tomate aliñado con sal, pimienta, ají, salsa inglesa, sal de apio y jugo de limón. Se sirve en el vaso 1 medida de vodka y se rellena con este jugo de tomate aliñado',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Petite Fleur',
      descripcion: 'En una copa pequeña se sirve el coñac, después el grand marnier y se revuelve.',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Frivola Mentita',
      descripcion: 'En un vaso mezclador se coloca la menta, el triple sec, el gin y la granadina. Se agita bien y se sirve decorado con marrasquinos rojos.',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Tom Collins',
      descripcion: 'En un vaso alto se sirve el gin, el jugo de limón y el azúcar. Se rellena con mineral revolviéndolo en forma constante.',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Clavo Oxidado',
      descripcion: 'Se llena la copa de coñac con hielo frappé, se le agrega la medida de drambuie, el whisky y el amargo. Se corta una cáscara de limón y se agrega al vaso.',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Piña Colada',
      descripcion: 'Se coloca la crema de coco, la leche, el jugo de pña y ron en la juguera. Se le agrega hielo y se bate. Para servir se decora con trozos de piña natural, coco rallado y marrasquino rojo.',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nombre: 'Tropicalissimo',
      descripcion: 'Se sirve directo al vaso. Se coloca hielo, después la piña picada, la esencia de piña y el ron. Se revuelve y se rellena con champaña.',
      tipo: 'trago',
      createdAt: new Date(),
      updatedAt: new Date()
    },],{});
  
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
