const { User, Event, Seat, Booking } = require('./models');

exports.getLogin = (req, res) => {
  res.send('Login Page');
};

exports.postLogin = async (req, res) => {
  // Handle login logic
};

exports.getRegister = (req, res) => {
  res.send('Register Page');
};

exports.postRegister = async (req, res) => {
  // Handle registration logic
};

exports.getEvents = async (req, res) => {
  const events = await Event.findAll();
  res.json(events);
};

exports.getSeats = async (req, res) => {
  const { id } = req.params;
  const seats = await Seat.findAll({ where: { event_id: id } });
  res.json(seats);
};

exports.bookSeat = async (req, res) => {
  // Handle booking logic
};
