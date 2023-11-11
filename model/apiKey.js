const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/dbConfig.js');

const ApiKey = sequelize.define('api_key_table', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    api_key: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

module.exports = ApiKey;
