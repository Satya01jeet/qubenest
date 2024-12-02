const mongoose = require("mongoose");

const visitSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  date: { type: String, required: true }, // Ensure the format matches your input
});

const UserVisit = mongoose.model("UserVisit", visitSchema);
module.exports = UserVisit;
