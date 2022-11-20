'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
    {
      id: 1,
      username: 'joaozinho',
      password: 'e10adc3949ba59abbe56e057f20f883e',
      // senha: 123456
      account_id: '1',
    },
    {
      id: 2,
      username: 'pedrinhu',
      password: 'e10adc3949ba59abbe56e057f20f883e',
      // senha: 123456
      account_id: '2',
    },
    {
      id: 3,
      username: 'juninhoo',
      password: 'e10adc3949ba59abbe56e057f20f883e',
      // senha: 123456
      account_id: '3',
    }
  ], {
      timestamps: false
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
