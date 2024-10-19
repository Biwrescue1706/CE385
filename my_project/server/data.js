const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Endpoint to get provinces
router.get('/provinces', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM provinces');
    res.json(result.rows);
  } catch (error) {
    console.error('Error querying provinces:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Endpoint to get districts based on provinceId
router.get('/districts/:provinceId', async (req, res) => {
  const { provinceId } = req.params;
  try {
    const result = await pool.query('SELECT * FROM districts WHERE province_id = $1', [provinceId]);
    res.json(result.rows);
  } catch (error) {
    console.error('Error querying districts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
