'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('company_branch_company_departments', [
      {
        branch_id: 1,
        departments_id:1
      },
   ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('company_branch_company_departments', null, {})
  }
};
