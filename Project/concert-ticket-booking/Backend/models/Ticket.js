const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
  email: { type: String, required: true },
  concertId: { type: String, required: true },
  seats: [Number],
});

module.exports = mongoose.model('Ticket', ticketSchema);