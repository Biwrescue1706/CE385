const express = require('express');
const bodyParser = require('body-parser');
const sql = require('mssql'); // นำเข้า mssql ถูกต้อง

const app = express();
const PORT = process.env.PORT || 5001;

// กำหนดค่า sqlConfig ของคุณที่นี่
const sqlConfig = {
  user: 'username',
  password: 'password',
  server: 'localhost',
  database: 'mydatabase',
};

// ใช้งาน sql
sql.connect(sqlConfig).then(pool => {
  if (pool.connected) {
    console.log('Connected to SQL Server');
  }
}).catch(err => {
  console.error('SQL connection error:', err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});