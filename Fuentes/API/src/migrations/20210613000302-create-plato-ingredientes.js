'use strict';

const { query } = require("express");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plato_ingredientes', {
      
      ingredienteId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'ingredientes',
          key: 'ingredienteId',
          as: 'idIngredientes'
        }
      },
      platoId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'platos',
          key: 'platoId',
          as: 'idPlato'
        }
      },
      cantidadIngrediente: {
        type: Sequelize.FLOAT
      },
      cantidadComensales: {
        type: Sequelize.INTEGER
      },
      
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
      .then(() => {   //claves foraneas como claves primarias
        return queryInterface.addConstraint('plato_ingredientes',{
          type: 'primary key',
          fields: ['ingredienteId','platoId'],
          name: 'idPlatoIngredientesPK'
        });
      });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plato_ingredientes');
  }
};