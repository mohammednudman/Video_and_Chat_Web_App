const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { type: "string", unique: true },
  username: { type: "string", unique: true },
  password: { type: "string", unique: false },
});

module.exports = mongoose.model("user", userSchema);
