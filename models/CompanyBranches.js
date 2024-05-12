// models/CompanyBranch.js
const { DataTypes } = require('sequelize');

const dataColomCompanyBranch = {
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
    company_code: {
        type: DataTypes.INTEGER,
        references: {
            model: 'CompanyInformation',
            key: 'company_code'
        }
    },
    user_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE
}

module.exports = dataColomCompanyBranch;
