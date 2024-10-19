const express = require('express');
const cors = require('cors');
const app = express();
const sql = require('mssql');
const port = 5001;

// คอนฟิกการเชื่อมต่อฐานข้อมูล
const dbConfig = {
  user: 'username',
  password: 'password',
  server: 'localhost',
  database: 'database_name'
};

// API Endpoint
app.get('/api/getData', async (req, res) => {
  try {
    let pool = await sql.connect(dbConfig);
    let result = await pool.request().query('SELECT * FROM your_table');
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// ใช้งาน CORS
app.use(cors());

// ข้อมูลการตั้งค่าเพิ่มเติม
app.use(express.json());

// ตั้งค่าระบบของเซิร์ฟเวอร์
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(5001, () => {
  console.log('Server running at http://localhost:5001');
});
