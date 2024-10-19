const sql = require('mssql');

const config = {
  user: 'your_username', // เปลี่ยนเป็นชื่อผู้ใช้ของคุณ
  password: 'your_password', // เปลี่ยนเป็นรหัสผ่านของคุณ
  server: 'localhost\\SQLEXPRESS', // หรือ 'localhost\\MSSQLLocalDB' สำหรับ LocalDB
  database: 'Thailand',
  options: {
    encrypt: true, // ใช้สำหรับการเชื่อมต่อที่เข้ารหัส
    trustServerCertificate: true, // ใช้ได้กับเซิร์ฟเวอร์ที่ใช้ self-signed certificates
  },
};

async function connectToDatabase() {
  try {
    const pool = await sql.connect(config);
    console.log('Connected to SQL Server');
    return pool;
  } catch (error) {
    console.error('Database connection failed:', error);
    throw error;
  }
}

module.exports = connectToDatabase;
