const express = require('express');
const router = express.Router();
const Concert = require('../models/Concert');
const Ticket = require('../models/Ticket');

// Buy a ticket
router.post('/', async (req, res) => {
  try {
    const concert = await Concert.findById(req.body.concertId);
    if (concert == null) {
      return res.status(404).json({ message: 'Concert not found' });
    }
    if (concert.availableTickets <= 0) {
      return res.status(400).json({ message: 'No tickets available' });
    }
    
    const ticket = new Ticket({
      concert: concert._id,
      user: req.user._id, // Assuming user authentication is implemented
    });
    await ticket.save();
    
    concert.availableTickets -= 1;
    await concert.save();
    
    res.status(201).json(ticket);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get user's tickets
router.get('/', async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.user._id }).populate('concert');
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;