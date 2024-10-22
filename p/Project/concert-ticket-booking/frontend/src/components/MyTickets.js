import React, { useState, useEffect } from 'react';

function MyTickets() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    // Fetch tickets for the logged-in user
    fetch('/my-tickets?email=user@example.com')
      .then((res) => res.json())
      .then((data) => setTickets(data));
  }, []);

  return (
    <div>
      <h1>My Tickets</h1>
      <ul>
        {tickets.map((ticket, index) => (
          <li key={index}>
            Concert ID: {ticket.concertId}, Seats: {ticket.seats.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyTickets;