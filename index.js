const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

//Dynamic port for Heroku or 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
