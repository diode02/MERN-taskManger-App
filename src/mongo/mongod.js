const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {});

module.exports = db;
