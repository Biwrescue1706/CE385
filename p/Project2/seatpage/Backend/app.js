// server.js หรือ app.js (Backend)
const express = require('express');
const mysql = require('mysql');
const app = express();

// เชื่อมต่อกับฐานข้อมูล
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

db.connect(err => {
  if (err) throw err;
  console.log('Connected to database');
});

// สร้าง endpoint สำหรับดึงข้อมูลจังหวัด
app.get('/api/provinces', (req, res) => {
  const sql = 'SELECT * FROM provinces'; // เปลี่ยนเป็นคำสั่ง SQL ที่ใช้กับฐานข้อมูลของคุณ
  db.query(sql, (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
