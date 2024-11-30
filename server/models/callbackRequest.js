const mongoose = require('mongoose');

const CallbackRequestSchema = new mongoose.Schema({
  name: { type: String, required: true },
  number: { type: String, required: true },
  email: { type: String, required: true },
});

const CallbackRequest = mongoose.model('CallbackRequest', CallbackRequestSchema);
module.exports = CallbackRequest;
