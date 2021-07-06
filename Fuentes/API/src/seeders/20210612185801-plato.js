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
   return queryInterface.bulkInsert('platos',[{
     nombre: 'Sopa de cebollas',
     descripcion: 'Se pone el aceite en una olla, cuando estè bien caliente se agregan las cebollas de pluma y el ajo. Cuando la cebolla estè transparente y un poco dorada se le agrega la harina, se revuelve bien todo y se le ponen 2 litros de agua con los cubos de carne. Se deja hervir más o menos 5 minutos y se agregan los huevos batidos y el perejil picado. El pan se corta en rodajas finas y se fríe poniéndolo en los platos en el momento de servirlo',
     tipo: 'entrada',
     createdAt: new Date(),
     updatedAt: new Date()
   },
    {
      nombre: 'Repollos rellenos con salsa de tomates y papas cocidas',
      descripcion: 'Se preparan 12 hojas de repollo enteras y se pasan por agua hirviendo para que ablanden un poco. En una cucharada de aceite se fríe la cebolla de cuadraditos junto con el ajo, pimienta y orégano. Se mezcla con la carne molida, el pan remojado y estrujado. Se junta bien y se rellenan las hojas de repollo formando niños envueltos. En una cacerola se mezclan las dos cucharadas de harina con 3 tazas de agua, el cubo de carne y la salsa de tomates, se deja hervir 5 minutos y se ponen los repollitos. Se dejarn hervir más o menos 1/2 hora a fuego lento, cuidando que no se peguen. Las papas se pelan y cuecen aparte.',
      tipo: 'fondo',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nombre: 'Ajiaco',
      descripcion: 'La carne se corta en tiritas y se fríe en aceite bien caliente. Se le agregan las cebollas de pluma y los aliños. Se deja dorar bien, destapado. Se le agregan las 3 zanahorias rayadas gruesas y 3 litros de agua. Se tapa y se deja hervir más o menos 1/2 hora. Las papas se cortan a lo largo no muy gruesas, se agregan a la sopa y se dejan hervir 10 minutos para que no se deshagan. Al momento de servir se le agrega el huevo batido con perejil picado.',
      tipo: 'fondo',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nombre: 'Coliflor con salsa blanca, huevo duro y papas',
      descripcion: 'La carne se corta en tiritas y se fríe en aceite bien caliente. Se le agregan las cebollas de pluma y los aliños. Se deja dorar bien, destapado. Se le agregan las 3 zanahorias rayadas gruesas y 3 litros de agua. Se tapa y se deja hervir más o menos 1/2 hora. Las papas se cortan a lo largo no muy gruesas, se agregan a la sopa y se dejan hervir 10 minutos para que no se deshagan. Al momento de servir se le agrega el huevo batido con perejil picado.',
      tipo: 'fondo',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nombre: 'Porotos con tallarines',
      descripcion: 'Los porotos remojados el día anterior se ponen a cocer junto al zapallo cortado en trozos. Aparte se fríe el tocino cortado en cubos con la cebolla, ajo y orégano. El zapallo se saca y se muele con un tenedor. Se agrega el zapallo y la fritura a los porotos. Cuando hierva se agregan los tallarines partidos en 3 junto con las salchichas picadas y el cubo de carne.',
      tipo: 'fondo',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nombre: 'Tallarines a la italiana',
      descripcion: 'Se pone aceite en una olla, cuando esté caliente se le agrega la carne molida y se dora bien. Se pican las cebollas en cuadritos finos y se agregan a la carne, se revuelve bien y se deja dorar destapado. Las zanahorias se pelan y se rayan finas. Si la cebolla está transparente se le agrega la zanahoria, el ajo, la hoja de laurel, el orégano, la pimienta y la cucharadita de azúcar. Se tapa la olla y se deja a fuego suave revolviendo para que no se pegue, más o menos 1/2 hora. Se destapa y se agrega la salsa de tomates y dos o tres tazas de agua. Se tapa y se deja a fuego lento hasta el momento de servir. Si espesa se le agrega agua. Los tallarines se cuecen en bastante agua con sal. No deben recocerse, se cuelan y se sirven con salsa.',
      tipo: 'fondo',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nombre: 'Hamburguesas con arroz y revuelto de zapallitos',
      descripcion: 'Se remoja el pan en agua, se estruja y se muele, se le vacía la carne, el huevo, 1/2 cebolla rayada con un cubo de carne y se mezcla todo bastante. Se forman las hamburguesas y se fríen en 3 cucharadas de aceite bien caliente. Se dan vuelta, se tapa la sartén y se baja el fuego para que se cuezan bien. En una olla se pone 1 cucharada de aceite y se fríe el resto de las cebollas a cuadritos con orégano, pimienta , se le agregan los zapallitos cortados en cubitos y 1 taza de agua. Cuando estén tiernos más o menos 5 minutos, se le agregan 3 huevos batidos y perejil picado. Se dejan cocer unos minutos y se apaga. Aparte se hacen 5 tazas de arroz blanco. Se sirve la hamburguesa con un molde de arroz bañado con los zapallitos.',
      tipo: 'fondo',
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      nombre: 'Tallarines a la Bontou',
      descripcion: 'Se cuece la pechuga de pollo. Estando cocida se pica en tiritas. Se hace la salsa blanca. En una olla se ponen las 2 cucharadas de aceite con el diente de ajo, antes de que se dore agregar las dos cucharadas de harina y mezclar bien; agregar de a poco la leche hirviendo revolviéndolo continuamente para que no se formen grumos. Dejar hervir unos minutos y agregar el pollo picado. En una olla con agua y sal, cocer los tallarines sin que se recuezan. Colarlos y poner en una fuente alternando con la salsa. Llevar a horno fuerte unos minutos. Si no se tiene horno, se sirven bañados con la salsa.',
      tipo: 'fondo',
      createdAt: new Date(),
      updatedAt: new Date()

    }
    /* {
      nombre: 'Cazuela',
      descripcion: 'En una olla se pone el aceite, cuando está bien caliente se agregan las presas de carne, se dora bien y se le añade la cebolla cortada a cuadritos, el ajo, 1 zanahoria rayada y los aliños, cuando todo esté dorado se le agregan 3 litros de agua. Se deja hervir durante 1 hora y se le agrega la zanahoria cortada en tiritas finas y el zapallo en trozos. Al cabo de 10 minutos se agregan las papas partidas a lo largo y el arroz. Se hierve 15 minutos más y se apaga. Servir espolvoreada con perejil picado.',
      tipo: 'fondo',
      createdAt: new Date(),
      updatedAt: new Date()

    } */], {});
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
