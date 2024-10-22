// src/pages/ConcertDetails.js
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ConcertDetails = () => {
  const { concertId } = useParams();
  const navigate = useNavigate();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const seatPrice = 100;

  const toggleSeatSelection = (seatNumber) => {
    setSelectedSeats((prev) =>
      prev.includes(seatNumber)
        ? prev.filter((seat) => seat !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handlePayment = () => {
    // Implement payment logic
    alert(`You have selected seats: ${selectedSeats.join(', ')}. Total: $${selectedSeats.length * seatPrice}`);
    navigate('/my-tickets');
  };

  return (
    <div>
      <h2>Concert {concertId}</h2>
      <h3>Select Seats</h3>
      <div className="seats">
        {[1, 2, 3, 4, 5].map((seatNumber) => (
          <button
            key={seatNumber}
            onClick={() => toggleSeatSelection(seatNumber)}
            className={selectedSeats.includes(seatNumber) ? 'selected' : ''}
          >
            Seat {seatNumber}
          </button>
        ))}
      </div>
      <p>Total: ${selectedSeats.length * seatPrice}</p>
      <button onClick={handlePayment}>Proceed to Payment</button>
    </div>
  );
};

export default ConcertDetails;
