'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false
      },
      name: {
        type: DataTypes.STRING
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      no_handphone: {
        type: DataTypes.STRING
      },
      password: {
          type: Sequelize.DataTypes.STRING,
          allowNull: false,
          validate: {
              isLongEnough: function(value) {
                  if (value.length < 60) {
                      throw new Error('Password harus memiliki setidaknya 60 karakter');
                  }
              },
              isBcryptHash: function(value) {
                  // Validasi untuk memeriksa apakah nilai adalah hash bcrypt yang valid
                  if (!/^\$2[abxy]\$[0-9]{2}\$.{53}$/.test(value)) {
                      throw new Error('Password harus merupakan hash bcrypt yang valid');
                  }
              }
          }
      },
      picture: {
        type: DataTypes.STRING
      },
      role: {
        type: DataTypes.STRING
      },
      position: {
        type: DataTypes.INTEGER
      },
      company_code: {
        type: DataTypes.INTEGER,
      },
      company_branch_id: {
        type: DataTypes.INTEGER,
      },
      company_department_id: {
        type: DataTypes.INTEGER,
      },
      createdAt: DataTypes.DATE, 
      updatedAt: DataTypes.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
  }
};
