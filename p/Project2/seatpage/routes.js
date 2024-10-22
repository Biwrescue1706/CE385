const express = require('express');
const pool = require('../db');
const router = express.Router();

// API สำหรับดึงข้อมูลจังหวัดทั้งหมด
router.get('/provinces', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT name FROM provinces');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// API สำหรับดึงข้อมูลอำเภอ/เขตตามจังหวัด
router.get('/districts/:provinceId', async (req, res) => {
  const { provinceId } = req.params;
  try {
    const [rows] = await pool.query('SELECT name FROM districts WHERE province_id = provinceId', [provinceId]);
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
