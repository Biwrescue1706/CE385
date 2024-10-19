// example.js
const pool = require('./db');

// ฟังก์ชันในการดึงข้อมูลจากตาราง
const getUsers = async () => {
  try {
    const result = await pool.query('SELECT * FROM users');
    console.log(result.rows);  // แสดงผลลัพธ์
  } catch (err) {
    console.error('Error executing query', err.stack);
  }
};

// เรียกใช้ฟังก์ชัน
getUsers();
