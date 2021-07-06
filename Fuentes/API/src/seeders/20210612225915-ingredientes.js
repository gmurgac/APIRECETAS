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
    return queryInterface.bulkInsert('ingredientes', [{
      nombre: 'Cebollas',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Aceite',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Ajo',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Harina',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Caldo de carne',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Marraqueta',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Huevos',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Repollo',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Carne molida',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Marraquetas añejas',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Tomates',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Papas',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Pimienta',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Salsa de tomate',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Posta',
      unidadMedida: 'Kgr',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Zanahorias',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Sal',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Orégano',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Perejil',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Pisco',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Limones',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Azucar Flor',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Rodajas de piña',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Piñas en tarro',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Piña',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Marrasquinos',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Whisky',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Jugo de piña',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Jugo de naranja',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Naranjas',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Amargo angostura',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Hielo',
      unidadMedida: 'cubos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Azúcar',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Gin',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Aceitunas verde',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Vermouth Seco',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Ron',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Triple sec',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Jugo de limón',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Vermut Rojo',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Gotas de marrasquino',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Jugo de tomate en tarro',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Vodka',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Ají',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Salsa Inglesa',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Sal de apio',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Coñac',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Grand marnier',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Menta verde',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Granadina',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Agua mineral',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Drambuie',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Crema de coco',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Leche',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Esencia de piña',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Ron Blanco',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Champaña',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Coliflor',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Porotos',
      unidadMedida: 'Kgr',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Tallarines',
      unidadMedida: 'paquetes',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Tocino',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Salchichas',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Zapallo',
      unidadMedida: 'Kgr',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Laurel',
      unidadMedida: 'hojas',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Zapallitos',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Costilla',
      unidadMedida: 'Kgr',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Porotos verdes',
      unidadMedida: 'cc',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Choclos',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Arroz',
      unidadMedida: 'gramos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Pechuga de pollo',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Caldo de gallina',
      unidadMedida: 'unidades',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ],
      {});
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
