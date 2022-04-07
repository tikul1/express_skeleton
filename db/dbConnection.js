const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/hardik")
  .then(() => console.log("connect"))
  .catch(() => console.log(err));

module.exports = mongoose;
