// models/CompanyBranch.js
const { DataTypes } = require('sequelize');

const dataColomCompanyBranchCompanyDepartments = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    branch_id: DataTypes.INTEGER,
    departments_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE
}

module.exports = dataColomCompanyBranchCompanyDepartments;
