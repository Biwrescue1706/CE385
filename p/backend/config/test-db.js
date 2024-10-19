const connectDB = require('../db'); // Adjust path if necessary

connectDB().then(pool => {
  console.log('Database connection successful');
}).catch(err => {
  console.error('Error:', err);
});