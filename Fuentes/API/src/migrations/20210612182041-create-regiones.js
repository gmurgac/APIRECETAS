'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('regiones', {
      regionId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreRegion: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },paisId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'paises',
          key: 'paisId',
          as: 'pais'
        }}
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('regiones');
  }
};