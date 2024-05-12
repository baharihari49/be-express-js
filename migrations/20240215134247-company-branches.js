'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.createTable('company_branches', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    address: DataTypes.STRING,
    phone_number: DataTypes.STRING,
    email: DataTypes.STRING,
    user_id: DataTypes.INTEGER,
    company_code: DataTypes.INTEGER,
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE
  })
},

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('company_branches');
  }
};
