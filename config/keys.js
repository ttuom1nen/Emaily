if (process.env.NODE_ENV === "production") {
  // Production keys
  module.exports = require("./prod");
} else {
  // Dev keys
  module.exports = require("./dev");
}
