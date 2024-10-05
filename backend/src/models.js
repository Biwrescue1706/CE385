const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('concert_ticket_app', 'your_pg_username', 'your_pg_password', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING
  }
});

const Event = sequelize.define('Event', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING
  }
});

const Seat = sequelize.define('Seat', {
  seat_number: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false
  },
  available: {
    type: DataTypes.BOOLEAN,
    defaultValue: true
  }
});

const Booking = sequelize.define('Booking', {
  booking_date: {
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW
  }
});

User.hasMany(Booking);
Booking.belongsTo(User);

Event.hasMany(Seat);
Seat.belongsTo(Event);

User.hasMany(Booking);
Seat.hasMany(Booking);
Booking.belongsTo(Seat);

module.exports = { User, Event, Seat, Booking, sequelize };
