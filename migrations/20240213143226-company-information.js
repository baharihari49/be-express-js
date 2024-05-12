'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('company_informations', {
      company_code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        // autoIncrement: true
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING
      },
      no_handphone: {
        type: DataTypes.STRING
      },
      address: {
        type: DataTypes.STRING
      },
      city: {
        type: DataTypes.STRING
      },
      province: {
        type: DataTypes.STRING
      },
      postal_code: {
        type: DataTypes.STRING
      },
      country: {
        type: DataTypes.STRING
      },
      website: {
        type: DataTypes.STRING
      },
      logo: {
        type: DataTypes.STRING
      },
      industry: {
        type: DataTypes.STRING(255)
      },
      pic: {
        type: DataTypes.STRING
      },
      bank_account_name: {
        type: DataTypes.STRING
      },
      bank_branch: {
        type: DataTypes.STRING
      },
      bank_account_number: {
        type: DataTypes.STRING
      },
      on_behalf_of: {
        type: DataTypes.STRING
      },
      descriptiont: {
        type: DataTypes.TEXT
      },
      user_id: {
        type: DataTypes.INTEGER,
      },
      createdAt: DataTypes.DATE, 
      updatedAt: DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
