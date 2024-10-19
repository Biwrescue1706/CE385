const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
const cors = require('cors');
app.use(cors());

// Example concerts data (this should be fetched from a database)
const concerts = [
  { id: 1, name: 'Concert 1', date: '2024-09-25', location: 'Stadium A' },
  { id: 2, name: 'Concert 2', date: '2024-10-10', location: 'Arena B' },
];

// Connect to MongoDB
mongoose.connect('mongodb://localhost/concerts');
// Models
const User = require('./models/User');
const Ticket = require('./models/Ticket');

// Routes
app.get('/', (req, res) => {
  res.send('Welcome to Concert Booking API');
});

// Get all concerts
app.get('/concerts', (req, res) => {
  res.json(concerts);
});

// Register
app.post('/register', async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = new User({ email, password });
    await newUser.save();
    res.status(201).send('User registered');
  } catch (error) {
    res.status(500).send('Error registering user');
  }
});

// Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email, password });
  if (user) {
    res.send('Login successful');
  } else {
    res.status(400).send('Invalid credentials');
  }
});

// Book tickets
app.post('/book', async (req, res) => {
  const { email, concertId, seats } = req.body;
  try {
    const newTicket = new Ticket({ email, concertId, seats });
    await newTicket.save();
    res.status(201).send('Tickets booked');
  } catch (error) {
    res.status(500).send('Error booking tickets');
  }
});

// Get my tickets
app.get('/my-tickets', async (req, res) => {
  const { email } = req.query;
  const tickets = await Ticket.find({ email });
  res.json(tickets);
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));