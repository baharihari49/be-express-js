// Import modul dan library yang diperlukan
const { Sequelize } = require('sequelize');
const config = require('./config.json'); // Sesuaikan dengan jalur file Anda

// Ambil konfigurasi sesuai lingkungan saat ini
const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = config[env];

// Inisialisasi Sequelize dengan konfigurasi dari file
const sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, {
  host: sequelizeConfig.host,
  dialect: sequelizeConfig.dialect
});

// Test koneksi
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Koneksi berhasil.');
  } catch (error) {
    console.error('Koneksi gagal:', error);
  }
})();

module.exports = sequelize;
