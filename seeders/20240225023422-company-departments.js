'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
     await queryInterface.bulkInsert('company_departments', [
      {
        name: 'Marketing',
        responsibilities: 'Sale',
        branch_id: 1
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.bulkDelete('company_departments', null, {});
  }
};
