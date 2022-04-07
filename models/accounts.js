const mongoose = require("mongoose");

const accountsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },

  role: {
    type: String,
  },
});

// const accounts = [
//   {
//     id: 1,
//     username: "paulhal",
//     role: "admin",
//   },
//   {
//     id: 2,
//     username: "johndoe",
//     role: "guest",
//   },
//   {
//     id: 3,
//     username: "sarahjane",
//     role: "guest",
//   },
// ];
module.exports = mongoose.model("accounts", accountsSchema);
