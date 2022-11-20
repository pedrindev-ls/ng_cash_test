'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Transactions', [
      {
        id: 1,
        debited_account: 1,
        credited_account: 2,
        value: '153,01',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
      },
      {
        id: 2,
        debited_account: 2,
        credited_account: 3,
        value: '10,25',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
      },
      {
        id: 3,
        debited_account: 1,
        credited_account: 3,
        value: '10000,05',
        created_at: new Date('2011-08-01T19:58:00.000Z'),
      }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Transactions', null, {});
  }
};
