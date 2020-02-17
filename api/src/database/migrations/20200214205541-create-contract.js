'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('contracts', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false, 
      },
      customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'customers', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      package_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'packages', key: 'id'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      lack: {
        type: Sequelize.INTEGER,
        allowNull: false,
        default: 30,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('contracts');
  }
};
