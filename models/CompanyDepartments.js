const { DataTypes } = require("sequelize");



const dataColomCompanyDepartments = {
    id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    responsibilities: DataTypes.STRING,
    branch_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'CompanyBranches',
            key: 'id'
        }
    },
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE
}

module.exports = dataColomCompanyDepartments