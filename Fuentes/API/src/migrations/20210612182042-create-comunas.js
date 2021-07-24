'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('comunas', {
      comunaId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreComuna: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      regionId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'regiones',
          key: 'regionId',
          as: 'region'
        }
    }});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('comunas');
  }
};