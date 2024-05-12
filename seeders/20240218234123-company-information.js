'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('company_informations', [
      {
       name: 'PT Boxity Central Indonesia',
       email: 'boxity@gmail.com',
       company_code: '17953',
       user_id: '1'
      },
      {
        name: 'PT Teknologi Naya Abadi',
        email: 'teknologinaya@gmail.com',
        company_code: '17954',
        user_id: '2'
       },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('company_informations', null, {})
  }
};
