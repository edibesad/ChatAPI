const { DB_NAME, DB_PASSWORD } = require("../constants/hiddenConstants.js")
const { Pool } = require("pg")

const DBPort = 5432


const DBPool = new Pool({
    user: "postgres",
    host: "localhost",
    database: DB_NAME,
    password: DB_PASSWORD,
    port: DBPort
})


DBPool.connect()
    .then(() => {
        console.log("Connected to the database successfully!");
    })
    .catch(err => {
        console.error("Error connecting to the database:", err);
    });

module.exports = DBPool