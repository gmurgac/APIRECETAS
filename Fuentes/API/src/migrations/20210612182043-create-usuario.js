'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('usuarios', {
      usuarioId: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreUsuario: {
        type: Sequelize.STRING
      },
      correoUsuario: {
        type: Sequelize.STRING
      },
      passwordUsuario: {
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
      comunaId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'comunas',
          key: 'comunaId',
          as: 'comuna'
        }
      }

    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('usuarios');
  }
};