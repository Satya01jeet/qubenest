const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  address: {type: String, required: true}
});

module.exports = mongoose.model('Room', roomSchema);
