const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const apiKeyMiddleware = require("./middleware/apiKeyMiddleware.js");
require("./config/dbConfig.js");


app.use(helmet())
app.use(cors())
app.use(morgan('combined'));
app.use(apiKeyMiddleware)


const PORT = 8080


app.listen(PORT, () => {
    return console.log(`Server running on port ${PORT}`);
});
