const { DataTypes } = require('sequelize');

const dataColoumCompanyInformation = {
    company_code: {
        type: DataTypes.INTEGER,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    no_handphone: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING,
    postal_code: DataTypes.STRING,
    country: DataTypes.STRING,
    website: DataTypes.STRING,
    logo: DataTypes.STRING,
    industry: DataTypes.STRING(255),
    pic: DataTypes.STRING,
    bank_account_name: DataTypes.STRING,
    bank_branch: DataTypes.STRING,
    bank_account_number: DataTypes.STRING,
    on_behalf_of: DataTypes.STRING,
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'User',
            key: 'id'
        }
    },
    createdAt: DataTypes.DATE, 
    updatedAt: DataTypes.DATE
};

module.exports = dataColoumCompanyInformation;
