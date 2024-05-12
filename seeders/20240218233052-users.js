'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('users', [
      {
        username: 'bahari',
        email: 'baharihaarai49@gmail.com',
        no_handphone: '083184512580',
        company_code: '17953',
        password: 'admin12345'
      },
      {
        username: 'bintang',
        email: 'bintang@gmail.com',
        no_handphone: '083184512580',
        company_code: '17954',
        password: 'admin12345'
      },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {})
  }
};
