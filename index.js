const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const apiKeyMiddleware = require("./middleware/apiKeyMiddleware.js");
require("./config/dbConfig.js");


//MIDDLEWARE
app.use((req, res, next) => {
    console.log("İstek geldi : " + req.url)
    next()
})
app.use(helmet())
app.use(cors())
app.use(morgan('combined'));
app.use(apiKeyMiddleware)

//ROUTES
const routes = require("./routes/index.js")

app.use("/api/auth", routes.authRouter)



const PORT = 8080
app.listen(PORT, () => {
    return console.log(`Server running on port ${PORT}`);
});
