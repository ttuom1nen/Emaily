const express = require("express");
require("./services/passport");

const app = express();

require("./routes/authRoutes")(app);

//Dynamic port for Heroku or 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
