'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Accounts', [
      {
        id: 1,
        balance: 100.00
      },
      {
        id: 2,
        balance: 153.18
      },
      {
        id: 3,
        balance: 98.02
      },
    ], { timestamps: false })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Accounts', null, {});
  }
};
