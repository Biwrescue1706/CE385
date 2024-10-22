import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ConcertDetail() {
  const { id } = useParams();
  const [seats, setSeats] = useState([]);

  const handleSeatSelection = (seat) => {
    setSeats([...seats, seat]);
  };

  const handleBooking = async () => {
    const response = await fetch('/book', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: 'user@example.com', concertId: id, seats }),
    });
    if (response.ok) {
      alert('Tickets booked');
    } else {
      alert('Error booking tickets');
    }
  };

  return (
    <div>
      <h1>Concert Detail</h1>
      <p>Concert ID: {id}</p>
      <div>
        <h2>Select Seats</h2>
        <button onClick={() => handleSeatSelection(1)}>Seat 1</button>
        <button onClick={() => handleSeatSelection(2)}>Seat 2</button>
        <button onClick={() => handleSeatSelection(3)}>Seat 3</button>
        <button onClick={() => handleSeatSelection(4)}>Seat 4</button>
      </div>
      <div>
        <h3>Selected Seats: {seats.join(', ')}</h3>
        <button onClick={handleBooking}>Book Now</button>
      </div>
    </div>
  );
}

export default ConcertDetail;