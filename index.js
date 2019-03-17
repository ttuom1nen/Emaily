const express = require("express");
const passportConfig = require("./services/passport");

const app = express();

//Dynamic port for Heroku or 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
