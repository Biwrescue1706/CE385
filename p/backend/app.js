const express = require('express');
const path = require('path');
const cors = require('cors');
const port = process.env.PORT || 8087;

const app = express();

// Middleware for parsing JSON
app.use(cors()); 
app.use(express.json());

// Database connection
const db = require('./db');

// Define API routes
const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle all other GET requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
