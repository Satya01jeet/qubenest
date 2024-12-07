
const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  paymentId: { type: String, required: true },
  roomType: { type: String, required: true }, 
  buildingName: { type: String, required: true },
  roomTitle: { type: String, required: true },
  customerName: { type: String, required: true },
  customerNumber: { type: String, required: true },
  customerEmail: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: 'pending' },
  bookedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);
