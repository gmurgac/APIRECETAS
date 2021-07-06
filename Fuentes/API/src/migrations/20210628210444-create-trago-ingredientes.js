'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('trago_ingredientes', {
      ingredienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ingredientes',
          key: 'ingredienteId',
          as: 'idIngredientes'
        }
      },
      tragoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'tragos',
          key: 'tragoId',
          as: 'idTrago'
        }
      },
      cantidadIngrediente: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }).then(() => {   //claves foraneas como claves primarias
      return queryInterface.addConstraint('trago_ingredientes',{
        type: 'primary key',
        fields: ['ingredienteId','tragoId'],
        name: 'idTragoIngredientesPK'
      });
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('trago_ingredientes');
  }
};