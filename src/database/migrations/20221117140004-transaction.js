'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Transactions', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      debited_account: {
        type: Sequelize.INTEGER
      },
      credited_account: {
        type: Sequelize.INTEGER
      },
      value: {
        type: Sequelize.STRING
      },
      created_at: {
        type: Sequelize.DATE,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
