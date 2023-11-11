const { Sequelize } = require('sequelize');
const { DB_NAME, DB_USERNAME, DB_PASSWORD } = require("../constants/hiddenConstants.js")



const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
});

async function testDatabaseConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection to the database has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

testDatabaseConnection();

module.exports = {
    sequelize,
    testDatabaseConnection,
};