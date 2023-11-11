const pool = require("../config/dbConfig.js")


async function apiKeyMiddleware(req, res, next) {
    const apiKey = req.headers["api-key"]
    console.log(req.header)
    try {
        const result = await pool.query("SELECT * FROM api_key_table WHERE api_key LIKE $1", [apiKey])
        if (result.rowCount != 0) {
            next();
        } else {
            res.status(401).json({ error: 'API key doğrulanamadı' });
        }
    }
    catch (error) {
        console.error('Error checking API key:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = apiKeyMiddleware