const express = require('express');
const router = express.Router();
const Concert = require('../models/Concert');

// Get all concerts
router.get('/', async (req, res) => {
  try {
    const concerts = await Concert.find();
    res.json(concerts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific concert
router.get('/:id', async (req, res) => {
  try {
    const concert = await Concert.findById(req.params.id);
    if (concert == null) {
      return res.status(404).json({ message: 'Concert not found' });
    }
    res.json(concert);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;