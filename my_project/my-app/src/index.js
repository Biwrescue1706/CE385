const express = require('express');

const app = express();
app.use(express.json());

app.post('/api/register', async (req, res) => {
  const { email, password, firstName, lastName, gender, day, month, year, documentType, documentNumber, phone, address, province, district, postalCode, receiveEmails } = req.body;

  // การเพิ่มข้อมูลลงในฐานข้อมูล
  try {
    await pool.query(
      `INSERT INTO users (email, password, first_name, last_name, gender, day, month, year, document_type, document_number, phone, address, province, district, postal_code, receive_emails)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)`,
      [email, password, firstName, lastName, gender, day, month, year, documentType, documentNumber, phone, address, province, district, postalCode, receiveEmails]
    );
    res.status(200).send('Registration successful');
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).send('Error inserting data');
  }
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
