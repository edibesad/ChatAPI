const apiKeyModel = require("../model/apiKey.js")


async function apiKeyMiddleware(req, res) {
    const apiKey = req.header["api-key"]
    try {
        const apiKeyRecord = await apiKeyModel.findOne({
            where: {
                api_key: apiKey
            }
        })
        if (apiKeyRecord) {
            next();
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
    }
    catch (error) {
        console.error('Error checking API key:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
module.exports = apiKeyMiddleware