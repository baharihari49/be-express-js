'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('company_branches', [
      {
       name: 'Cabang Medan Barat',
       address: 'Jl Alafalah',
       email: 'boxity@gmail.com',
       company_code: '17953',
      },
      {
        name: 'Cabang Medan Timur',
        address: 'Jl Alafalah',
        email: 'boxity2@gmail.com',
        company_code: '17954',
       },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('company_branches', null, {})
  }
};
