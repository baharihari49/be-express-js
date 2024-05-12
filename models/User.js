const { DataTypes } = require('sequelize');

const dataColoumUser ={
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        
        autoIncrement: true
    },
    name: DataTypes.STRING,
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: DataTypes.STRING,
    no_handphone: DataTypes.STRING,
    picture: DataTypes.STRING,
    role: DataTypes.STRING,
    position: DataTypes.STRING,
    company_code: {
        type: DataTypes.INTEGER,
        references: {
            model: 'CompanyInformation',
            key: 'company_code'
        }
    },
    password: {
        type: DataTypes.STRING,
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
    }
};

module.exports = dataColoumUser
