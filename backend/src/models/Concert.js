const mongoose = require('mongoose');

const concertSchema = new mongoose.Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  date: { type: Date, required: true },
  venue: { type: String, required: true },
  description: String,
  price: { type: Number, required: true },
  totalTickets: { type: Number, required: true },
  availableTickets: { type: Number, required: true },
});

module.exports = mongoose.model('Concert', concertSchema);